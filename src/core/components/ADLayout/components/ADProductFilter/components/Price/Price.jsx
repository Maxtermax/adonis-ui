import React from "react";
import ADRangeSlider from "ADRangeSlider";
import ADText from "ADText";
import ADFlex from "ADFlex";
import * as styles from "./styles";

export const Price = ({ onChange }) => {
  return (
    <styles.Container>
      <ADText value="Precio" variant="title" />
      <ADFlex
        className="ad-product-filter__price"
        direction="column"
        gap={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <ADRangeSlider
          onChange={onChange}
          step={10000}
          min={45000}
          max={10000000}
        />
      </ADFlex>
    </styles.Container>
  );
};
