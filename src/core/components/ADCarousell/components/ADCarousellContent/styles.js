import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

export const Container = withTheme(
  styled.div(({ theme = {} }) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    height: "fit-content",
    width: "calc(100vw - 80px)",
    ["&::-webkit-scrollbar"]: {
      height: "2px",
    },
    ["&::-webkit-scrollbar-track"]: {
      backgroundColor: "transparent",
    },
    ["&::-webkit-scrollbar-thumb"]: {
      cursor: "pointer",
      backgroundColor: theme.colors.primary,
    },
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
      paddingTop: theme.spacing.calc(8),
      paddingBottom: theme.spacing.calc(8),
      width: "100vw",
    },
  })),
);

export const Content = withTheme(
  styled.div(({ theme = {} }) => ({
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    width: "100%",
    gap: theme.spacing.medium,
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
      gap: "0px",
    },
  })),
);

export const Item = withTheme(styled.div`
  scroll-snap-align: start;
`);
