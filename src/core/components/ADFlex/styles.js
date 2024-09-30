import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Flex = withTheme(
  styled.div(
    ({
      lg,
      sm,
      md,
      alignItems = "center",
      fullWidth,
      fullHeight,
      height = "auto",
      width = "auto",
      maxWidth = "none",
      gap = 1,
      direction,
      theme,
    }) => ({
      display: "flex",
      justifyItems: "center",
      alignItems,
      gap: theme.spacing.calc(gap),
      height: fullHeight ? "100%" : height,
      width: fullWidth ? "100%" : width,
      maxWidth,
      flexDirection: direction ?? "row",
      [`@media screen and (min-width: ${theme.breakpoints.lg})`]: lg ? lg : {},
      [`@media screen and (max-width: ${theme.breakpoints.lg})`]: lg ? lg : {},
      [`@media screen and (max-width: ${theme.breakpoints.md})`]: md ? md : {},
      [`@media screen and (max-width: ${theme.breakpoints.sm})`]: sm ? sm : {},
    }),
  ),
);
