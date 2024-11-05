import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
`);

export const Header = withTheme(styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  & .ad-button {
    margin-top: ${({ theme }) => theme.spacing.calc(2)};
  }
`);

export const Content = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.calc(2)};
  height: 100%;
  width: 100%;
`);

export const Footer = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${({ theme }) => theme.spacing.calc(8)});
  height: 80px;
  .ad-text {
    color: ${({ theme }) => theme.colors.contrast.primary};
    text-transform: uppercase;
  }
  .ad-button {
    height: calc(100% - ${({ theme }) => theme.spacing.calc(8)});
    width: 100%;
  }
`);
