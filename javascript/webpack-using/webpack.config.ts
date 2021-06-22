/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'
import * as path from 'path'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
import * as webpack from 'webpack'

// https://webpack.js.org/configuration/configuration-languages/
type ModeType = 'development' | 'production' | 'none'

const ENV: ModeType = (process.env.NODE_ENV ?? 'development') as ModeType
const port = parseInt(process.env.PORT ?? '8000')

function isProd(): boolean {
  return ENV === 'production'
}

function resolve(dir: string): string {
  return path.resolve(__dirname, dir)
}

const config: webpack.Configuration = {
  mode: ENV,
  entry: {
    index: resolve('./src/main.ts'),
  },
  output: {
    // 发布到线上的所有资源的 URL 前缀，string 类型
    publicPath: '/',
    // 输出文件存放的目录，必须是 string 类型的绝对路径。
    path: resolve('dist'),
    filename: '[name]_[contenthash:8].js',
  },
  devServer: {
    contentBase: resolve('public'),
    open: true, // 自动打开浏览器
    compress: isProd(),
    port,
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
    // 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。 且优先命中ts
    extensions: ['.ts', '.js'],
  },
  // 处理模块
  module: {
    // 配置loader, loader 的执行顺序是：从后往前
    rules: [
      {
        test: /\.(ts|js)$/,
        use: ['babel-loader?cacheDirectory'],
        // 只命中src目录里的ts文件
        include: resolve('src'),
      },
      // 处理图片
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
      },
      // 处理css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // sass
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'js'],
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack练习项目',
      favicon: false,
      filename: (entry: string) => {
        return `${entry}.html`
      },
      template: resolve('./public/index.html'),
    }),
  ],
}

export default config
