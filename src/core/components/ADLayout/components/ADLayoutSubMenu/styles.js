import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { animations } from "ADProvider";

export const BottomLine = withTheme(styled.div`
  background: ${({ theme }) => theme.colors.contrast.primary}; 
  display: block;
  height: 4px;
  width: 0%;
  margin-top: ${({ theme }) => theme.spacing.calc(1)};
  transition: ${({ theme }) => theme.transitions.quick};
`);

export const UnOrderList = withTheme(styled.ul`
  animation-name: ${animations.fadeIn};
  animation-duration: ${({ theme }) => theme.timing.fast};
  animation-timing-function: ${({ theme }) => theme.animationFunctions.sweet};
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.calc(4)};
  & .ad-text {
    color: ${({ theme }) => theme.colors.contrast.primary};
  }
  & .ad-text-title {
    color: ${({ theme }) => theme.colors.contrast.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.extra};
    padding-bottom: ${({ theme }) => theme.spacing.calc(2)};
    text-transform: uppercase;
  }
  & .ad-text-item {
    color: ${({ theme }) => theme.colors.contrast.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  }
  & a {
    text-decoration: none;
    display: inline-block;
  }
  & a:hover .ad-bottom-line {
    width: 50%;
  }
`);

export const Nav = withTheme(styled.nav`
  display: flex;
  margin: 0px auto;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  width: 100%;
  gap: ${({ theme }) => theme.spacing.calc(4)};
  justify-content: space-evenly;
`);

export const Item = withTheme(styled.li`
  animation-name: ${animations.fadeIn};
  animation-duration: ${({ theme }) => theme.timing.mid};
  animation-delay: ${({ delay }) => (delay / 15)}s;
  animation-timing-function: ${({ theme }) => theme.animationFunctions.easy};
  animation-fill-mode: forwards;
  padding: 0px;
  margin: 0px;
  opacity: 0;
  list-style: none;
`);

export const Content = withTheme(styled.div`
  animation-name: ${animations.fadeIn};
  animation-duration: ${({ theme }) => theme.timing.fast};
  animation-timing-function: ${({ theme }) => theme.animationFunctions.sweet};
  animation-fill-mode: forwards;
  height: 100%;
  display: flex;
  align-items: center;
`);

export const SubMenu = withTheme(styled.div`
  background: ${({ theme }) => theme.colors.primary};
  animation-name: ${animations.growAndFadeIn};
  animation-duration: ${({ theme }) => theme.timing.quick};
  animation-timing-function: ${({ theme }) => theme.animationFunctions.sweet};
  animation-fill-mode: forwards;
  box-shadow: ${({ theme }) => theme.elevation.little};
  view-transition-class: submenu-transition-group;
  view-transition-name: submenu-transition;
  display: flex;
  position: fixed;
  width: 100%;
  height: 0px;
  top: 80px;
  & .ad-layout-submenu__container {
    animation-name: ${animations.fadeIn};
    animation-duration: ${({ theme }) => theme.timing.quick};
    animation-delay: ${({ theme }) => theme.timing.fast};
    animation-timing-function: ${({ theme }) => theme.animationFunctions.sweet};
    animation-fill-mode: forwards;
    view-transition-class: submenu-transition-group;
    view-transition-name: submenu-transition-option;
    opacity: 0;
    padding-top: 0px;
    padding-bottom: 0px;
    width: 100%;
  }
`);
