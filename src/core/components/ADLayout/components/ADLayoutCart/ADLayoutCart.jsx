import ADButton from "ADButton";
import { ShoppingCart } from "@styled-icons/material-outlined/ShoppingCart";
import { withTheme } from "@emotion/react";

export const ADLayoutCart = withTheme(({ theme }) => (
  <ADButton className="ad-cart" variant="text">
    <ShoppingCart
      color="inherit"
      size={theme.fonts.sizes.parse2Num(theme.fonts.sizes.extra)}
    />
  </ADButton>
));

