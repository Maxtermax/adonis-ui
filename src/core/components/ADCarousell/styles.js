import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

export const Wrapper = withTheme(
  styled.div(({ theme = {} }) => ({
    alignItems: "center",
    display: "flex",
    gap: "10px",
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
      "& .ad-loader": {
        position: "absolute",
        boxShadow : theme.elevation.regular,
        right: "10px",
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
