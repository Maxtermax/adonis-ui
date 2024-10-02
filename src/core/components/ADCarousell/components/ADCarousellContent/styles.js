import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

export const Container = withTheme(
  styled.div(({ theme = {} }) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    overflowX: "auto",
    height: "fit-content",
    width: "calc(100vw - 140px)",
    ["&::-webkit-scrollbar"]: {
      display: "none",
    },
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
      width: "100vw",
    },
  })),
);

export const Content = withTheme(styled.div`
  align-items: center;
  justify-content: flex-start;
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.medium};
`);
