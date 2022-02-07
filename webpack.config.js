const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin')
const webpack = require('webpack')

module.exports = () => ({
  entry: {
    main: path.resolve(__dirname, './src/main.js'),
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    libraryTarget: 'system',
  },

  devServer: {
    port: 8881,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: ['localhost:9000']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
              loader: 'vue-loader',
              options: {
                  compilerOptions: {
                      isCustomElement: tag => tag.startsWith('as-')
                  }
              }
          }
      ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new SystemJSPublicPathWebpackPlugin({
      rootDirectoryLevel: 2,
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],

  externals: [
    'single-spa',
    'single-spa-vue',
    'vue',
    'vue-router',
    '@niagahoster/components'
  ],
})
