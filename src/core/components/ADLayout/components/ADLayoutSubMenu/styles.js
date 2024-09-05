import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { animations } from "ADProvider";

export const Content = withTheme(styled.div`
  animation-name: ${animations.slideTopAndFadeIn};
  animation-duration: ${({ theme }) => theme.timing.fast};
  animation-timing-function: ${({ theme }) => theme.animationFunctions.sweet};
  animation-fill-mode: forwards;
`);

export const SubMenu = withTheme(styled.div`
  background: ${({ theme }) => theme.colors.smoke};
  animation-name: ${animations.growAndFadeIn};
  animation-duration: ${({ theme }) => theme.timing.quick};
  animation-timing-function: ${({ theme }) => theme.animationFunctions.sweet};
  animation-fill-mode: forwards;
  view-transition-class: submenu-transition-group;
  view-transition-name: submenu-transition;
  display: flex;
  position: fixed;
  width: 100%;
  height: 0px;
  top: 80px;
  & .ad-layout-submenu__container {
    animation-name: ${animations.slideTopAndFadeIn};
    animation-duration: ${({ theme }) => theme.timing.quick};
    animation-delay: ${({ theme }) => theme.timing.fast};
    animation-timing-function: ${({ theme }) => theme.animationFunctions.sweet};
    animation-fill-mode: forwards;
    view-transition-class: submenu-transition-group;
    view-transition-name: submenu-transition-option;
    opacity: 0;
    padding-top: 0px;
    width: 100%;
  }
`);
