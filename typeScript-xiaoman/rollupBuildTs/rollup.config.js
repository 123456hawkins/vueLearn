console.log(process.env)
import ts from 'rollup-plugin-typescript2'
import path from 'path'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import repacle from 'rollup-plugin-replace'

const isDev = () => {
  // 服务器环境才有process.env.NODE_ENV
  return process.env.NODE_ENV === 'development'
}
export default {
  input: './src/main.ts',
  output: {
    file: path.resolve(__dirname, './lib/index.js'),
    format: 'umd',
    sourcemap: true,
  },

  plugins: [
    ts(),
    terser({
      compress: {
        drop_console: !isDev(),
      },
    }),
    repacle({
      // 浏览器读不到process，所以要替换
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve(['.js', '.ts']),
    isDev() && livereload(),
    isDev() &&
      serve({
        open: true,
        openPage: '/public/index.html',
      }),
  ],
}
