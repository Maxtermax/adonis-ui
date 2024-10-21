import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(
  styled.div(({ theme }) => ({
    display: "flex",
    width: "100%",
    height: "3px",
    position: "absolute",
    bottom: "15px",
    justifyContent: "center",
    flexDirection: "row",
    gap: theme.spacing.calc(2),
    visibility: "hidden",
    "& .ad-media-indicator-selected": {
      opacity: 1,
      width: "40px",
    },
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: {
      visibility: "visible",
    },
  })),
);

export const Slice = withTheme(styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  width: 20px;
  height: 100%;
  transition: ${({ theme }) => theme.transitions.smooth};
  opacity: 0.25;
`);

export const IndicatorWrapper = withTheme(styled.div`
  position: absolute;
  right: calc(50% - 63px);
  bottom: 20px;
`);


