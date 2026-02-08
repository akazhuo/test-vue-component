/*
 * @Descripttion: webpack生产环境配置
 * @version:
 * @Author: Charles Guo
 * @Date: 2021-08-18 00:46:12
 * @LastEditors: Cheuk
 * @LastEditTime: 2026-02-08 22:03:04
 */
const webpackBaseConfig = require('./webpack.base.config.cjs');
const { merge } = require('webpack-merge')
const path = require('path')

function createConfig(format) {
  const isESM = format === 'esm'

  return merge(webpackBaseConfig, {
    entry: path.join(__dirname, '../src/main.ts'),
    output: {
      // libraryTarget: 'umd',
      // library: 'EmployeeQuery'
      filename: 'EmployeeQuery.cjs.js',
      library: { type: isESM ? 'module' : 'commonjs2' },
    },
    externals: isESM ? { vue: 'vue' } : { vue: 'commonjs vue' },
    experiments: isESM ? { outputModule: true } : undefined,
    stats: { errorDetails: true }
  })
}

module.exports = (env) => {
  if (env?.format) return createConfig(env.format)
    return [createConfig('esm'), createConfig('cjs')]
}
