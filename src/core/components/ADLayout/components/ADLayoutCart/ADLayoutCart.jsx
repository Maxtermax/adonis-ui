import React from "react";
import ADButton from "ADButton";
import ADBadge from "ADBadge";
import { ShoppingCart } from "@styled-icons/feather/ShoppingCart";
import { withTheme } from "@emotion/react";
import { POSITIONS } from "constants";

export const ADLayoutCart = withTheme(({ theme }) => (
  <ADBadge value="1" variant="rounded" position={POSITIONS.topLeft} t>
    <ADButton className="ad-cart" variant="text">
      <ShoppingCart
        color="inherit"
        size={theme.fonts.sizes.parse2Num(theme.fonts.sizes.extra)}
      />
    </ADButton>
  </ADBadge>
));
