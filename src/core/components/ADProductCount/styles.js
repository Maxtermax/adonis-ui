import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(
  styled.div(({ theme }) => ({
    background: theme.colors.white,
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: theme.spacing.regular,
    display: "inline-block",
    padding: theme.spacing.calc(1),
    "& .ad-button": {
      padding: "0px",
      minWidth: "40px",
      height: "30px",
    },
  })),
);
