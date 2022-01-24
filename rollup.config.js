import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import ts from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

const pkg = require('./package.json');

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourceMap: true
      },
      {
        file: pkg.module,
        format: 'esm',
        sourceMap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      url(),
      svgr({ typescript: true }),
      ts({ tsconfig: './tsconfig.json' }),
    ],
    external: ["react", "react-dom", "styled-components"],
    globals: { 'styled-components': 'styled' }
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: ["react", "react-dom", "styled-components"],
    globals: { 'styled-components': 'styled' }
  }
];

export default config;