import { useStore } from "hermes-io";
import { ThemeProvider } from "@emotion/react";
import buildTheme from "theme/theme";
import { THEME } from "constants";
import "@/index.css";

const ThemeBuilder = ({ render }) => {
  const customTheme = (rootTheme) => ({
    ...rootTheme,
    colors: {
      ...rootTheme.colors,
      primary: "red",
    },
  });
  const content = render(customTheme(buildTheme(THEME.LIGHT)));
  return (
    <ADGrid md={{ cols: 1, rows: 1 }} cols={2} rows={1}>
      <styles.Left>
        <h1>Builder</h1>
      </styles.Left>
      <styles.Right>{content}</styles.Right>
    </ADGrid>
  );
};

const ADProvider = ({ children, reducer, store, data }) => {
  useStore({ store, reducer, data });
  return (
    <ThemeBuilder
      render={(theme) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    />
  );
};

export default ADProvider;
