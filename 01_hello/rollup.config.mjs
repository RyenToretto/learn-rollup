import alias from '@rollup/plugin-alias'; // 支持 别名
import resolve from '@rollup/plugin-node-resolve'; // 支持第三库直接的模块关联
import json from '@rollup/plugin-json'; // 支持引入 json文件
import commonjs from '@rollup/plugin-commonjs'; // 支持 commonJS
import esbuild from 'rollup-plugin-esbuild'; // 集成 typescript
import dts from 'rollup-plugin-dts'; // 用于生成 .d.ts 声明文件

const entries = [
  'src/index.ts',
]

const plugins = [
  alias({
    entries: [
      { find: /^node:(.+)$/, replacement: '$1' },
    ],
  }),
  resolve({
    preferBuiltins: true,
  }),
  json(),
  commonjs(),
  esbuild({
    target: 'node14',
  }),
]

export default [
  ...entries.map(input => ({
    input,
    output: [
      {
        file: input.replace('src/', 'dist/es/').replace('.ts', '.mjs'),
        format: 'esm',
      },
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.js'),
        format: 'umd',
        name: 'diyUtils'
      },
      {
        file: input.replace('src/', 'dist/lib/').replace('.ts', '.cjs'),
        format: 'cjs',
      },
    ],
    external: [],
    plugins,
  })),
  ...entries.map(input => ({
    input,
    output: {
      file: input.replace('src/', 'types/').replace('.ts', '.d.ts'),
      format: 'esm',
    },
    external: [],
    plugins: [
      dts({ respectExternal: true }),
    ],
  })),
]
