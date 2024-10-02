import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

export const Wrapper = withTheme(
  styled.div(({ theme = {} }) => ({
    alignItems: "center",
    display: "flex",
    gap: "10px",
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
      "& .ad-carousell__arrow": {
        display: "none",
      },
    },
  })),
);
