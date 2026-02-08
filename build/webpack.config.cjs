/*
 * @Descripttion:webpack配置入口
 * @version: 
 * @Author: Charles Guo
 * @Date: 2021-08-18 00:45:06
 * @LastEditors: Cheuk
 * @LastEditTime: 2026-02-08 22:02:22
 */
import { merge } from 'webpack-merge'
import baseConfig from './webpack.base.config.cjs'
import devConfig from './webpack.dev.config.cjs'
import prodConfig from './webpack.prod.config.cjs'

// let config = process.NODE_ENV === 'development' ? devConfig : prodConfig
// export default merge(baseConfig, config)

export default (env, argv) => {
  let config = argv.mode === 'development' ? devConfig : prodConfig
  return merge(baseConfig, config)
}