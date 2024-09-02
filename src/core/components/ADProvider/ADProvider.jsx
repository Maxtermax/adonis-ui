import React from "react";
import emotionNormalize from "emotion-normalize";
import { Global, css, ThemeProvider } from "@emotion/react";
import theme from "theme";

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
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
              border: 1px solid red !important;
            }
          }
          @keyframes fade-out {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
          html {
            view-transition-name: root;
          }
          html::view-transition-old(root) {
            animation-name: fade-out;
            animation-fill-mode: forwards;
            animation-duration: 30000s;
          }
          html::view-transition-new(root) {
            animation-name: fade-in;
            animation-fill-mode: forwards;
            animation-duration: 30000s;
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
