const { join } = require('path')
const merge = require('webpack-merge')
const basicConfig = require('./webpack.base.config')

const resolve = dir => join(__dirname, '..', dir)

module.exports = merge(basicConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: resolve('dist'),
    filename: 'index.js',
    library: 'VuetifyDatetimePicker',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
    libraryExport: 'default'
  },
  externals: {
    moment: 'moment'
  }
})
