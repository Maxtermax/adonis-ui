import React from "react";
import ADButton from "ADButton";
import ADBadge from "ADBadge";
import { ShoppingCart } from "@styled-icons/material-outlined/ShoppingCart";
import { withTheme } from "@emotion/react";

export const ADLayoutCart = withTheme(({ theme }) => (
  <ADBadge value="1">
    <ADButton className="ad-cart" variant="text">
      <ShoppingCart
        color="inherit"
        size={theme.fonts.sizes.parse2Num(theme.fonts.sizes.extra)}
      />
    </ADButton>
  </ADBadge>
));
