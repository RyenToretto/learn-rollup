const resolve = require('@rollup/plugin-node-resolve');
const commonJS = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const jsonInstall = require('@rollup/plugin-json');

module.exports = {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'umd',
    name: 'experience'
  },
  plugins: [
    resolve(),
    commonJS(),
    babel({ babelHelpers: 'bundled' }),
    jsonInstall()
  ]
};
