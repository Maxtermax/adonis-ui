import React from "react";
import ADFlex from "ADFlex";
import { useTheme } from "@emotion/react";

export const Gallery = ({ data = [] }) => {
  const theme = useTheme();
  return (
    <ADFlex
      direction="column"
      gap={4}
      sx={{
        width: "100%",
        height: "100%",
        maxHeight: "100dvh",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
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
        [`@media screen and (max-width: ${theme.breakpoints.md})`]: {
          width: "100vw",
        },
      }}
    >
      {data.map((src = "") => (
        <ADFlex
          key={src}
          direction="column"
          gap={4}
          sx={{
            scrollSnapAlign: "start",
            width: "100%",
            [`@media screen and (max-width: ${theme.breakpoints.md})`]: {
              width: "100vw",
            },
            [`@media screen and (max-width: ${theme.breakpoints.md})`]: {
              "& img": {
                width: "100%",
              },
            },
          }}
        >
          <img src={src} alt="gallery" />
        </ADFlex>
      ))}
    </ADFlex>
  );
};
