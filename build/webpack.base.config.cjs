/*
 * @Descripttion: webpack公共环境配置
 * @version:
 * @Author: Charles Guo
 * @Date: 2021-08-18 00:45:21
 * @LastEditors: Cheuk
 * @LastEditTime: 2026-02-07 22:49:44
 */
// 最新 node 核心包的导入写法
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  output: {
    filename: 'employee-query.js',
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.vue'],
    // alias: {
    //   vue: 'vue/dist/vue.esm-bundler.js'
    // }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
               // 消除 export 'render' (imported as 'render') was not found
              appendTsSuffixTo: [/\.vue$/]
            }
          },
        ],
        exclude: /node_modeuls/,
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
};
