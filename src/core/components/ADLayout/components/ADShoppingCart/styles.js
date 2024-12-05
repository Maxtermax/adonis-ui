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
  justify-content: space-between;
  & .ad-button {
    margin-top: ${({ theme }) => theme.spacing.calc(2)};
  }
  & .ad-panel {
    padding: ${({ theme }) => theme.spacing.calc(2)};
  }
`);

export const Content = withTheme(styled.ol`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.calc(4)};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.calc(4)};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.calc(2)};
  height: calc(100% - ${({ theme }) => theme.spacing.calc(8)});
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  ${({ sx = {} }) => ({ ...sx })};
`);

export const Divider = withTheme(styled.hr`
  background: ${({ theme }) => theme.colors.lightSilver};
  border: none;
  display: flex;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 1px;
`);

export const Footer = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  .ad-text {
    color: ${({ theme }) => theme.colors.contrast.primary};
    text-transform: uppercase;
  }
  .ad-button {
    margin-top: ${({ theme }) => theme.spacing.calc(2)};
    height: 40px;
    width: 100%;
  }
`);
