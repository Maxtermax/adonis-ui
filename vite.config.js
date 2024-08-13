import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import pkg from "./package.json";

export const generateAlias = (root = "src") => {
  const alias = [
    {
      find: "theme",
      replacement: path.resolve(__dirname, `${root}/core/theme/Light.js`),
    },
    {
      find: "constants",
      replacement: path.resolve(__dirname, `${root}/core/constants.js`),
    },
    {
      find: "@",
      replacement: path.resolve(__dirname, `${root}`),
    },
  ];
  for (const [key] of Object.entries(pkg.exports)) {
    const [name] = key.split("/").slice(-1);
    alias.push({
      find: name,
      replacement: path.resolve(__dirname, `${root}/core/components/${name}`),
    });
  }
  return alias;
};

export const alias = [
  {
    find: "constants",
    replacement: path.resolve(__dirname, "src/core/constants.js"),
  },
  {
    find: "@",
    replacement: path.resolve(__dirname, "./src"),
  },
  {
    find: "theme",
    replacement: path.resolve(__dirname, "src/core/theme/Light.js"),
  },
  {
    find: "ADProvider",
    replacement: path.resolve(__dirname, "src/core/components/ADProvider"),
  },
  {
    find: "ADMedia",
    replacement: path.resolve(__dirname, "src/core/components/ADMedia"),
  },
  {
    find: "ADCard",
    replacement: path.resolve(__dirname, "src/core/components/ADCard"),
  },
  {
    find: "ADSwitch",
    replacement: path.resolve(__dirname, "src/core/components/ADSwitch"),
  },
  {
    find: "ADBadge",
    replacement: path.resolve(__dirname, "src/core/components/ADBadge"),
  },
  {
    find: "ADAccordion",
    replacement: path.resolve(__dirname, "src/core/components/ADAccordion"),
  },
  {
    find: "ADTabs",
    replacement: path.resolve(__dirname, "src/core/components/ADTabs"),
  },
  {
    find: "ADText",
    replacement: path.resolve(__dirname, "src/core/components/ADText"),
  },
  {
    find: "ADButton",
    replacement: path.resolve(__dirname, "src/core/components/ADButton"),
  },
  {
    find: "ADRadio",
    replacement: path.resolve(__dirname, "src/core/components/ADRadio"),
  },
  {
    find: "ADSelect",
    replacement: path.resolve(__dirname, "src/core/components/ADSelect"),
  },
  {
    find: "ADDrawer",
    replacement: path.resolve(__dirname, "src/core/components/ADDrawer"),
  },
  {
    find: "ADSteps",
    replacement: path.resolve(__dirname, "src/core/components/ADSteps"),
  },
  {
    find: "ADNotification",
    replacement: path.resolve(__dirname, "src/core/components/ADNotification"),
  },
  {
    find: "ADLoader",
    replacement: path.resolve(__dirname, "src/core/components/ADLoader"),
  },
  {
    find: "ADOverlay",
    replacement: path.resolve(__dirname, "src/core/components/ADOverlay"),
  },
  {
    find: "ADPopup",
    replacement: path.resolve(__dirname, "src/core/components/ADPopup"),
  },
  {
    find: "ADTooltip",
    replacement: path.resolve(__dirname, "src/core/components/ADTooltip"),
  },
  {
    find: "ADCheckbox",
    replacement: path.resolve(__dirname, "src/core/components/ADCheckbox"),
  },
  {
    find: "ADTextField",
    replacement: path.resolve(__dirname, "src/core/components/ADTextField"),
  },
  {
    find: "ADPanel",
    replacement: path.resolve(__dirname, "src/core/components/ADPanel"),
  },
  {
    find: "stores",
    replacement: path.resolve(__dirname, "src/core/stores"),
  },
  { find: "utils", replacement: path.resolve(__dirname, "src/utils") },
  {
    find: "hooks",
    replacement: path.resolve(__dirname, "src/utils/hooks"),
  },
  {
    find: "observers",
    replacement: path.resolve(__dirname, "src/core/observers"),
  },
  {
    find: "contexts",
    replacement: path.resolve(__dirname, "src/core/contexts"),
  },
  {
    find: "mutations",
    replacement: path.resolve(__dirname, "src/core/mutations"),
  },
  {
    find: "queries",
    replacement: path.resolve(__dirname, "src/core/queries"),
  },
  {
    find: "reducers",
    replacement: path.resolve(__dirname, "src/core/reducers"),
  },
  {
    find: "theme",
    replacement: path.resolve(__dirname, "src/core/theme"),
  },
];

// const alias = generateAlias();
// console.log(alias);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    resolve: {
      alias,
    },
  };
});
