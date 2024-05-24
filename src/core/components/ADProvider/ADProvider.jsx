import { useStore } from "hermes-io";
import { ThemeProvider } from "@emotion/react";
import { ADGrid } from "components/ADGrid/ADGrid";
import * as styles from "./styles";
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
    <styles.Container>
      <ADGrid md={{ cols: 1, rows: 1 }} cols="1fr 300px" rows="1fr">
        <styles.Right>{content}</styles.Right>
        <styles.Left>
          <h1>Builder</h1>
        </styles.Left>
      </ADGrid>
    </styles.Container>
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
