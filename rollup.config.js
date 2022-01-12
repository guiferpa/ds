import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import ts from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts'

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
      ts({ tsconfig: './tsconfig.json' })
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
];

export default config;