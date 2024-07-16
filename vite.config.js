import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "src") },
        {
          find: "features",
          replacement: path.resolve(__dirname, "src/core/features"),
        },
        {
          find: "components",
          replacement: path.resolve(__dirname, "src/core/components"),
        },
        {
          find: "ADMedia",
          replacement: path.resolve(__dirname, "src/core/components/ADMedia"),
        },
        {
          find: "ADAccordion",
          replacement: path.resolve(
            __dirname,
            "src/core/components/ADAccordion",
          ),
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
          find: "ADBreadcrumbs",
          replacement: path.resolve(
            __dirname,
            "src/core/components/ADBreadcrumbs",
          ),
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
          replacement: path.resolve(
            __dirname,
            "src/core/components/ADNotification",
          ),
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
          replacement: path.resolve(
            __dirname,
            "src/core/components/ADCheckbox",
          ),
        },
        {
          find: "ADTextField",
          replacement: path.resolve(
            __dirname,
            "src/core/components/ADTextField",
          ),
        },
        {
          find: "ADPanel",
          replacement: path.resolve(__dirname, "src/core/components/ADPanel"),
        },
        {
          find: "ADThemeBuilder",
          replacement: path.resolve(
            __dirname,
            "src/core/components/ADThemeBuilder",
          ),
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
          find: "constants",
          replacement: path.resolve(__dirname, "src/core/constants"),
        },
        {
          find: "theme",
          replacement: path.resolve(__dirname, "src/core/theme"),
        },
      ],
    },
  };
});
