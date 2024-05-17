import { useStore } from "hermes-io";
import { ThemeProvider } from "@emotion/react";
import buildTheme from "theme/theme";
import { THEME } from "constants";
import "@/index.css";

const ADProvider = ({
  children,
  reducer,
  store,
  initialData,
  theme = THEME.LIGHT,
}) => {
  useStore({ store, reducer, data: initialData });
  console.log({ store, reducer, initialData })
  return <ThemeProvider theme={buildTheme(theme)}>{children}</ThemeProvider>;
};

export default ADProvider;