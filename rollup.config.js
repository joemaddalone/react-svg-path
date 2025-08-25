import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { swc } from "@rollup/plugin-swc";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs", // CommonJS
      sourcemap: true,
      exports: "named",
    },
    {
      dir: "dist/esm", // ES Modules directory
      format: "esm", // ES Modules
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src"
    },
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),
    swc({
      configFile: ".swcrc"
    }),
  ],
  external: (id) => {
    // Externalize React and related packages
    if (id === 'react' || id === 'react-dom' || id.startsWith('react/') || id.startsWith('react-dom/')) {
      return true;
    }
    return false;
  },
};