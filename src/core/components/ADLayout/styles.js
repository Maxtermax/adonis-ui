import { keyframes, withTheme } from "@emotion/react";
import styled from "@emotion/styled";

const show = keyframes`
  0% {
    opacity: 0;
    height: 0px;
  }
  100% {
    opacity: 1;
    height: 250px;
  }
`;

export const Header = withTheme(styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  color: ${({ theme }) => theme.colors.contrast.primary};
  justify-content: space-between;
  margin: 0px auto;
  width: 100%;
  height: 80px;
  & > .ad-grid {
    width: ${({ theme }) => `calc(100% - ${theme.spacing.calc(14)})`};
    margin: 0px auto;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    & > .ad-grid {
      width: ${({ theme }) => `calc(100% - ${theme.spacing.calc(0)})`};
    }
  }
  & .ad-text-subtitle,
  .ad-text-heading {
    color: ${({ theme }) => theme.colors.contrast.primary};
    text-align: center;
  }
`);

export const Container = withTheme(styled.div`
  align-content: stretch;
  display: grid;
  grid-template-rows: 80px auto 100px;
  height: 100dvh;
`);

export const Icon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
`;

export const Item = withTheme(styled.li`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  & .ad-button {
    color: ${({ theme }) => theme.colors.contrast.primary};
    background: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.contrast.primary : theme.colors.primary};
  }
  & .ad-button .ad-text {
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primary : theme.colors.contrast.primary};
  }
  & .ad-button:hover {
    background: ${({ theme }) => theme.colors.contrast.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  & .ad-button:hover .ad-text {
    color: ${({ theme }) => theme.colors.primary};
  }
  & .ad-card:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`);

export const List = styled.ul`
  display: flex;
  padding: 0px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
`;

export const SubMenu = withTheme(styled.div`
  border: 1px solid red;
  display: flex;
  position: fixed;
  width: 100%;
  top: 80px;
  & .ad-panel {
    animation-name: ${show};
    animation-duration: ${({ theme }) => theme.timing.smooth};
    animation-timing-function: ${({ theme }) => theme.animationFunctions.sweet};
    animation-fill-mode: forwards;
    height: 0px;
    width: 100%;
  }
`);

export const HeaderContainer = styled.div`
  .hidden {
    display: none;
  }
`;
