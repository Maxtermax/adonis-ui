import { useStore } from "hermes-io";
import { ThemeProvider } from "@emotion/react";
import buildTheme from "theme/theme";
import { THEME } from "constants";
import "@/index.css";

const innerTheme = (rootTheme) => ({
  ...rootTheme,
  colors: {
    ...rootTheme.colors,
    primary: "red",
    red: "blue",
  },
});

const ADProvider = ({
  children,
  reducer,
  store,
  data,
  theme = THEME.LIGHT,
}) => {
  useStore({ store, reducer, data });
  return (
    <ThemeProvider theme={innerTheme(buildTheme(theme))}>
      {children}
    </ThemeProvider>
  );
};

export default ADProvider;
