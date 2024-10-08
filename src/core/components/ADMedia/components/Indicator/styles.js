import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  display: flex;
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: 15px;
  justify-content: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.calc(2)};
  .ad-media-indicator-selected {
    opacity: 1;
    width: 40px;
`);

export const Slice = withTheme(styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  width: 20px;
  height: 100%;
  transition: ${({ theme }) => theme.transitions.smooth};
  opacity: 0.25;
`);
