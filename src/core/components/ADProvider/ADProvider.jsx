import React from "react";
import emotionNormalize from "emotion-normalize";
import { Global, css, ThemeProvider, keyframes } from "@emotion/react";
import theme from "theme";

const slideTopAndFadeIn = keyframes`
  0% {
    opacity: 0;
    margin-top: 0px;
  }
  100% {
    opacity: 1;
    margin-top: 20px;
  }
`;

const growAndFadeIn = keyframes`
  0% {
    opacity: 0;
    height: 0px;
  }
  100% {
    opacity: 1;
    height: 150px;
  }
`;

export const animations = { slideTopAndFadeIn, growAndFadeIn };

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
            animation-name: ${slideTopAndFadeIn};
            animation-direction: reverse;
            animation-duration: ${theme.timing.quick};
          }
          ::view-transition-new(submenu-transition-option) {
            animation-name: ${slideTopAndFadeIn};
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
