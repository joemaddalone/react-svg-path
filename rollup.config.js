import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const INPUT_FILE_PATH = 'src/index.js';
const OUTPUT_NAME = 'react-svg-path';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-dom/server': 'ReactDOMServer'
};

const EXTERNAL = ['react', 'react-dom', 'react-dom/server'];

const PLUGINS = [
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    skipPreflightCheck: true
  }),
  resolve({
    browser: true,
    resolveOnly: [
      /^(?!react$)/,
      /^(?!react-dom$)/,
      /^(?!react-dom\/server$)/,
      /^(?!prop-types)/
    ]
  }),
  commonjs()
];

// https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: 'umd'
  },
  {
    file: pkg.main,
    format: 'cjs'
  },
  {
    file: pkg.module,
    format: 'es'
  }
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS
  },
  external: ['cjs', 'es'].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
  plugins: PLUGINS
}));

export default config;
