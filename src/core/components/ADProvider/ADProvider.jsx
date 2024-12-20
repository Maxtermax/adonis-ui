import React from "react";
import emotionNormalize from "emotion-normalize";
import { Global, css, ThemeProvider, keyframes } from "@emotion/react";
import theme from "theme";

const blur = keyframes`
  0% {
    filter: blur(0px);
    position-event: auto;
  }
  100% {
    filter: blur(15px);
    position-event: none;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const growAndFadeIn = keyframes`
  0% {
    height: 0px;
  }
  100% {
    height: 250px;
  }
`;

const growWidth = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const animations = { fadeIn, blur, growAndFadeIn, growWidth };

export const ADProvider = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          #storybook-root {
            width: 100%;
            padding: 0px !important;
          }
          ::view-transition-group(.submenu-transition-group) {
            animation-duration: ${theme.timing.quick};
            animation-timing-function: ${theme.animationFunctions.sweet};
            animation-fill-mode: forwards;
          }
          ::view-transition-old(submenu-transition) {
            animation-name: ${growAndFadeIn};
            animation-direction: reverse;
          }
          ::view-transition-new(submenu-transition) {
            animation-name: ${growAndFadeIn};
          }
          ::view-transition-old(submenu-transition-option) {
            animation-name: ${fadeIn};
            animation-direction: reverse;
            animation-duration: ${theme.timing.quick};
          }
          ::view-transition-new(submenu-transition-option) {
            animation-name: ${fadeIn};
          }
          .ad-layout-body__container--blur {
            filter: blur(20px);
            pointer-events: none;
          }
          .hide {
            display: none !important;
          }
          html,
          body {
            padding: 0;
            margin: 0;
            background: white;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
          }
        `}
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
