const { join } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = dir => join(__dirname, '..', dir)

module.exports = {
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        loader: 'vue-style-loader!css-loader'
      },
      {
        test: /\.(styl)$/,
        loader: 'vue-style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(less)$/,
        loader: 'vue-style-loader!css-loader!less-loader'
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              fiber: require('fibers'),
              indentedSyntax: true // optional
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query: {
          name: 'font/[hash:8].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.less', '.styl'],
    modules: [resolve('src'), 'node_modules'],
    alias: {
      '~src': resolve('src'),
      '~components': resolve('src/components'),
      '~pages': resolve('src/pages'),
      '~assets': resolve('src/assets'),
      '~store': resolve('src/store'),
      '~static': resolve('src/static')
    }
  }
}
