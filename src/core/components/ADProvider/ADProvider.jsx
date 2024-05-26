import { useStore } from "hermes-io";
import { ThemeProvider } from "@emotion/react";
import { ADBuilder } from "components/ADBuilder/ADBuilder";
import "@/index.css";

const ADProvider = ({ children, reducer, store, data }) => {
  useStore({ store, reducer, data });
  return (
    <ADBuilder
      render={(theme) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    />
  );
};

export default ADProvider;
