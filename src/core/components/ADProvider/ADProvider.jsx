import { ThemeProvider } from "@emotion/react";
import { ADThemeBuilder } from "ADThemeBuilder/ADThemeBuilder";
import "@/index.css";

const ADProvider = ({ children }) => {
  return (
    <ADThemeBuilder
      render={(theme) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    />
  );
};

export default ADProvider;
