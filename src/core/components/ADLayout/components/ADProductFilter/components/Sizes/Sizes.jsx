import React, { useState } from "react";
import ADText from "ADText";
import ADButton from "ADButton";
import ADFlex from "ADFlex";
import * as styles from "./styles";

/**
 * Sizes component allows users to select clothing sizes.
 *
 * @param {Object} props - The component props.
 * @param {function} props.onChange - Callback function to handle size selection changes.
 * It receives the updated list of sizes as an argument.
 *
 * @returns {JSX.Element} The rendered Sizes component.
 */
export const Sizes = ({ onChange }) => {
  const [sizes, setSizes] = useState([
    { id: "XS", selected: false },
    { id: "S", selected: false },
    { id: "M", selected: false },
    { id: "L", selected: false },
    { id: "XL", selected: false },
  ]);

  /**
   * Handles the selection or deselection of a size.
   *
   * @param {Object} size - The size object that is being selected or deselected.
   */
  const handleSelectSize = (size) => {
    size.selected = !size.selected;
    setSizes([...sizes]);
    onChange?.(sizes);
  };
  return (
    <styles.Container>
      <ADText value="Talla" variant="title" />
      <ADFlex
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="space-between"
      >
        {sizes.map((size) => (
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
        ))}
      </ADFlex>
    </styles.Container>
  );
};
