import ts from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

const pkg = require('./package.json');

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        globals: { 'styled-components': 'styled' }
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        globals: { 'styled-components': 'styled' }
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      ts({ tsconfig: "./tsconfig.json" })
    ],
    external: ["react", "styled-components"]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [
      { 
        file: 'dist/index.d.ts', 
        format: 'esm' 
      }
    ],
    plugins: [
      dts()
    ]
  }
];

export default config;