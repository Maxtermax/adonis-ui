import React from "react";
import ADButton from "ADButton";
import ADErrorMessage from "ADErrorMessage";
import ADLoader from "ADLoader";
import ADBadge from "ADBadge";
import useLoaderData from "@/core/hooks/useLoaderData";
import { getTotalProducts } from "@/core/hooks/useDataSource/queries";
import { ShoppingCart } from "@styled-icons/feather/ShoppingCart";
import { withTheme } from "@emotion/react";
import { POSITIONS } from "constants";

export const ADLayoutCart = withTheme(({ theme, onOpen }) => {
  const { actions, state, onEvent } = useLoaderData('products');
  const { isLoading, error } = state;
  onEvent(actions.SET_PRODUCTS, (value) => ({
    isLoading: false,
    error: null,
    data: value,
  }));

  if (isLoading)
    return (
      <ADLoader
        sx={{
          "& .ad-loader__spinner": {
            border: `3px solid ${theme.colors.white}`,
            borderBottomColor: "transparent",
          },
        }}
      />
    );
  if (error)
    return (
      <ADErrorMessage message="Los sentimos ocurrio un error interno 😞" />
    );
  const total = getTotalProducts();
  const content = (
    <ADButton onClick={onOpen} className="ad-cart" variant="text">
      <ShoppingCart
        color="inherit"
        size={theme.fonts.sizes.parse2Num(theme.fonts.sizes.extra)}
      />
    </ADButton>
  );
  if (total === 0) return content;
  return (
    <ADBadge value={total} variant="rounded" position={POSITIONS.topLeft} t>
      {content}
    </ADBadge>
  );
});
