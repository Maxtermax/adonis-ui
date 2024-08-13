import React from "react";
import emotionNormalize from "emotion-normalize";
import { Global, css, ThemeProvider } from "@emotion/react";
import { THEME } from "constants";
import buildTheme from "theme";
// import "@/index.css";

export const ADProvider = ({ children }) => {
  const BASE_THEME = buildTheme(THEME.LIGHT);
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
      <ThemeProvider theme={BASE_THEME}>{children}</ThemeProvider>
    </>
  );
};

