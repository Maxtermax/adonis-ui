import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

const buildStylesByVariant = ({ variant, theme }) => {
  switch (variant) {
    case "fill":
      return {
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        ["& .ad-text"]: {
          color: theme.colors.white,
        },
      };
    case "flat":
      return {
        color: theme.colors.primary,
        backgroundColor: theme.colors.transparent,
        borderRadius: theme.spacing.none,
      };
    default:
      return {
        color: theme.colors.primary,
        backgroundColor: theme.colors.lightSilver,
      };
  }
};

export const Panel = withTheme(
  styled.div(({ variant, theme, width = "100%" }) => ({
    borderRadius: theme.spacing.regular,
    padding: theme.spacing.medium,
    width,
    ...buildStylesByVariant({ variant, theme }),
  })),
);
