import cleanup from 'rollup-plugin-cleanup'

export default [
  {
    input: 'index.js',
    plugins: [cleanup()],
    output: {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
  },
  {
    input: 'index.js',
    plugins: [cleanup()],
    output: {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
  },
]
