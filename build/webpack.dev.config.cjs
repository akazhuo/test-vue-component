/*
 * @Descripttion: webpack开发环境配置
 * @version: 
 * @Author: Charles Guo
 * @Date: 2021-08-18 00:45:34
 * @LastEditors: Cheuk
 * @LastEditTime: 2026-02-08 22:04:05
 */
const webpackBaseConfig = require('./webpack.base.config.cjs');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(webpackBaseConfig, {
    entry: path.join(__dirname, '../src/index.ts'),
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:4000',
                changeOrigin: true,
                pathRewrite(path) {
                    const replacePath = path.replace(/^\/api/, '')
                    return replacePath + '.json'
                }
            }
        ]
    },
    plugins: [
        
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/tpl/index.html'),
        }),
    ]
})