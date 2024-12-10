import React, { useState } from "react";
import ADTooltip from "ADTooltip";
import ADText from "ADText";
import ADBadge from "ADBadge";
import ADButton from "ADButton";
import ADFlex from "ADFlex";
import { BellOutline } from "@styled-icons/evaicons-outline/BellOutline";
import { POSITIONS } from "constants";
import * as styles from "./styles";
import { useTheme } from "@emotion/react";

/**
 * Sizes component allows users to select clothing sizes.
 *
 * @param {Object} props - The component props.
 * @param {function} props.onChange - Callback function to handle size selection changes.
 * @param {string} props.defaultSize - default size.
 * @param {string} props.id - id.
 * @param {string[]} props.notAvailables  - notAvailables sizes
 * @param {boolean} props.hideTitle - hide title.
 * It receives the updated list of sizes as an argument.
 *
 * @returns {JSX.Element} The rendered Sizes component.
 */
export const Sizes = ({
  hideTitle = false,
  defaultSize = "",
  notAvailables = [],
  onChange,
  ...rest
}) => {
  const theme = useTheme();
  const [sizes, setSizes] = useState([
    { id: "XS", selected: defaultSize === "XS" },
    { id: "S", selected: defaultSize === "S" },
    { id: "M", selected: defaultSize == "M" },
    { id: "L", selected: defaultSize == "L" },
    { id: "XL", selected: defaultSize === "XL" },
  ]);

  /**
   * Handles the selection or deselection of a size.
   *
   * @param {Object} size - The size object that is being selected or deselected.
   */
  const handleSelectSize = (size) => {
    const isNotAvailable = notAvailables.includes(size.id);
    if (isNotAvailable) {
      size.selected = false;
      setSizes([...sizes]);
      onChange?.(sizes, true);
      return;
    }
    sizes.forEach((item) => (item.selected = false));
    size.selected = !size.selected;
    setSizes([...sizes]);
    onChange?.(sizes, false);
  };

  return (
    <styles.Container {...rest}>
      {!hideTitle ? (
        <ADText value="Talla" textTransform="uppercase" variant="title" />
      ) : null}
      <ADFlex
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        {sizes.map((size) => {
          const result = (
            <ADTooltip text={`Talla: ${size.id}`} key={size.id}>
              <ADButton
                variant={size.selected ? "contained" : "outlined"}
                onClick={() => handleSelectSize(size)}
                className="ad-sizes-button"
              >
                <ADFlex
                  direction="column"
                  gap={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  {size.id}
                </ADFlex>
              </ADButton>
            </ADTooltip>
          );
          const isNotAvailable = notAvailables.includes(size.id);
          if (isNotAvailable) {
            return (
              <ADBadge
                key={size.id}
                bottom="14px"
                value={<BellOutline size={20} />}
                position={POSITIONS.topLeft}
                sx={{
                  " & .ad-badge__value": {
                    background: theme.colors.darkGrey,
                    color: theme.colors.primary,
                    width: "20px",
                    height: "20px",
                  },
                }}
              >
                {result}
              </ADBadge>
            );
          }
          return result;
        })}
      </ADFlex>
      <ADText
        value="Guia de talla"
        href="#"
        textTransform="uppercase"
        variant="anchor"
        sx={{
          fontSize: theme.fonts.sizes.calc(0.7),
          textDecoration: "underline"
        }}
      />
    </styles.Container>
  );
};
