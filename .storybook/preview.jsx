import { ThemeProvider } from "@emotion/react";
import buildTheme from "theme/theme";
import { THEME } from "constants";
import "@/index.css";

const preview = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={buildTheme(THEME.LIGHT)}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
