/** @type { import('@storybook/react-vite').StorybookConfig } */
import * as path from "path";

const config = {
  alias: {
    "@": path.resolve(__dirname, "./../src"),
    theme: path.resolve(__dirname, "./../src/core/theme"),
    constants: path.resolve(__dirname, "./../src/core/constants"),
  },
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: '@storybook/builder-vite',
  },
};
export default config;
