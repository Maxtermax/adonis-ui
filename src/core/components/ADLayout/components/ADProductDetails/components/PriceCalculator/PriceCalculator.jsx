import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import ADFlex from "ADFlex";
import ADProductCount from "ADProductCount";
import Sizes from "../../../ADProductFilter/components/Sizes";
import formatCurrency from "../../../../../../../utils/formatCurrency";
import { Price, Text } from "../../ADProductDetails";

export const PriceCalculator = ({ data, onChange, onSizeChange }) => {
  const [amount, setAmount] = useState(data.amount);
  const theme = useTheme();
  const handleChange = (value) => {
    setAmount(value);
    onChange(value);
  };
  return (
    <>
      <ADFlex direction="row" gap={4}>
        <Price price={data.price} discount={data.discount} />
        <Text value="X" />
        <ADProductCount
          defaultValue={data.amount}
          minValue={1}
          onChange={handleChange} />
        <Text
          value="="
          sx={{
            [`@media screen and (max-width: ${theme.breakpoints.md})`]: {
              display: "none",
            },
          }} />
        <Text
          value={`${formatCurrency((data?.discount?.now || data.price) * amount)}`}
          sx={{
            [`@media screen and (max-width: ${theme.breakpoints.md})`]: {
              display: "none",
            },
          }} />
      </ADFlex>

      <ADFlex
        sx={{
          display: "none",
          [`@media screen and (max-width: ${theme.breakpoints.md})`]: {
            display: "flex",
            marginTop: "-10px"
          },
        }}
      >
        <Text
          value={`Total: ${formatCurrency((data?.discount?.now || data.price) * amount)}`} />
      </ADFlex>

      <ADFlex sx={{ maxWidth: "300px", marginTop: theme.spacing.calc(1) }}>
        <Sizes
          hideTitle
          onChange={onSizeChange}
          defaultSize={data.size}
          notAvailables={data.notAvailables} />
      </ADFlex>
    </>
  );
};
