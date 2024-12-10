import React, { useEffect, useRef } from "react";
import ADGrid from "ADGrid";
import ADText from "ADText";
import ADFlex from "ADFlex";
import { ADProductStrips } from "../ADProductStrips/ADProductStrips";
import { KeyboardArrowUp } from "@styled-icons/material-sharp/KeyboardArrowUp";
import useMediaQuery from "@/core/hooks/useMediaQuery";
import { useTheme } from "@emotion/react";
import { debounce } from "lodash";

export const ADRecommendations = ({ data = [], isOpen }) => {
  const theme = useTheme();
  const contentRef = useRef(null);
  const arrowIndicatorRef = useRef(null);
  const isMobile = useMediaQuery(
    (theme) => `(max-width: ${theme.breakpoints.sm})`,
  );

  useEffect(() => {
    const node = contentRef.current;
    const arrowIndicator = arrowIndicatorRef.current;
    const resolveIndicatorVisibility = () => {
      if (node && arrowIndicator && node.scrollHeight > node.clientHeight) {
        arrowIndicator.style.display = "inline-flex";
      } else if (arrowIndicator) {
        arrowIndicator.style.display = "none";
      }
    };
    if (isOpen) debounce(resolveIndicatorVisibility, 100)();
  }, [data, isOpen]);

  return (
    <ADFlex
      direction="column"
      gap={2}
      sx={{
        maxHeight: `calc(100% - ${isMobile ? "104px" : "200px"})`,
        width: "100%",
        height: "100%",
      }}
    >
      <ADGrid
        alignItems={"start"}
        gap={6}
        cols={"repeat(2, 1fr)"}
        ref={contentRef}
        lg={{
          margin: "0px auto",
          marginTop: "20px",
          cols: 2,
          rows: 1,
        }}
        sm={{
          gap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
        sx={{
          width: "calc(100% - 5px)",
          height: "100%",
          overflowY: "auto",
          paddingLeft: "5px",
          paddingRight: "8px",
          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            cursor: "pointer",
            backgroundColor: theme.colors.primary,
          },
        }}
      >
        {data.map(({ id = "", name = "", products = [] }) => (
          <ADFlex
            fullWidth
            alignItems="flex-start"
            direction="column"
            gap={4}
            key={id}
          >
            <ADText variant="title" value={name} />
            <ADProductStrips key={id} data={products} />
          </ADFlex>
        ))}
      </ADGrid>
      <ADFlex
        ref={arrowIndicatorRef}
        sx={{
          display: "none",
          position: "fixed",
          bottom: "4px",
        }}
      >
        <KeyboardArrowUp
          style={{
            color: theme.colors.primary,
            transform: "rotate(180deg)",
          }}
          size={40}
        />
      </ADFlex>
    </ADFlex>
  );
};
