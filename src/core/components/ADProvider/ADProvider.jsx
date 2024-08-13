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

