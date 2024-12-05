import React, { useState } from "react";
import { uniqueId } from "lodash";
import ADText from "ADText";
import ADButton from "ADButton";
import ADFlex from "ADFlex";
import * as styles from "./styles";

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
}) => {
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
  };

  return (
    <styles.Container>
      {!hideTitle ? <ADText value="Talla" variant="title" /> : null}
      <ADFlex
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        {sizes.map((size) => {
          const result = (
            <ADButton
              variant={size.selected ? "contained" : "outlined"}
              key={size.id}
              onClick={() => handleSelectSize(size)}
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
          );
          return result;
        })}
      </ADFlex>
    </styles.Container>
  );
};
