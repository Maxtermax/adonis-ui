// @ts-nocheck
import { exec } from "child_process";
import fs from "fs";

function executeCommand(command) {
  return new Promise((resolve) => {
    exec(command, (error, stdout, stderr) => {
      if (error) throw error;
      if (stderr) throw stderr;
      resolve(stdout);
    });
  });
}

function generateRootPaths(components) {
  return components.reduce(
    (accumulator, name) => {
      accumulator.exports[`./components/${name}`] = {
        import: `./lib/src/core/components/${name}/index.js`,
        require: `./lib/src/core/components/${name}/index.js`,
      };
      return accumulator;
    },
    {
      exports: {
        ".": {
          import: "./lib/src/index.js",
          require: "./lib/src/index.js",
        },
        "./index.css": {
          import: "../src/index.css",
          require: "../src/index.css"
        },
        "./theme": {
          import: "./lib/src/core/theme/theme.js",
          require: "./lib/src/core/theme/theme.js"
        },
        './utils/formatCurrency': {
          import: "./lib/src/utils/formatCurrency.js",
          require: "./lib/src/utils/formatCurrency.js",
        },
        './hooks/useMediaQuery': {
          import: "./lib/src/utils/hooks/useMediaQuery.js",
          require: "./lib/src/utils/hooks/useMediaQuery.js",
        }
      },
    },
  );
}

function updatePackageJson(entries) {
  const fileName = "./package.json"
  const data = fs.readFileSync(fileName, {
    encoding: "utf8",
    flag: "r",
  });
  const content = JSON.parse(data);
  content.exports = entries.exports;
  fs.writeFile(fileName, JSON.stringify(content, null, 1), function writeJSON(err) {
    if (err) return console.log(err);
  });
}

const build = await executeCommand("npx swc ./src -d ./lib");
console.log(build);
const list = await executeCommand("ls lib/src/core/components/");
updatePackageJson(generateRootPaths(list.split(/\n|\s+/).filter(Boolean)));
