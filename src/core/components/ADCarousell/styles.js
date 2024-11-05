import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

export const Wrapper = withTheme(
  styled.div(({ theme = {} }) => ({
    alignItems: "center",
    display: "flex",
    width: `calc(100% - ${theme.spacing.calc(12.5)})`,
    margin: "0px auto",
    "& .ad-carousell__arrow": {
      background: theme.colors.silver,
      borderRadius: "100%",
      color: theme.colors.primary,
      padding: "2px",
      minWidth: "40px",
    },
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
      width: "100%",
      "& .ad-carousell-item--shrink": {
        transform: `${theme.transform.scale["90%"]}`,
        opacity: 0.4,
      },
      "& .ad-loader": {
        position: "absolute",
        boxShadow: theme.elevation.center,
        right: "15px",
        background: theme.colors.white,
        padding: theme.spacing.calc(3),
        borderRadius: theme.border.radius.rounded,
      },
      "& .ad-carousell__arrow": {
        display: "none",
      },
    },
  })),
);
