const computePath = require('./utils').computePath
const styleLint = require('stylelint-webpack-plugin')
const copyWebpack = require('copy-webpack-plugin')

// make the API_PORT constant available inside this file
require('dotenv').config({ path: computePath('../.env') })
const { NODE_ENV, API_PORT, TITLE } = process.env

module.exports = options => ({
  entry: [computePath('../src/app.tsx')],
  publicPath: './',
  plugins: [
    require('@poi/plugin-typescript')({
      tsChecker: {
        async: false
      }
    })
  ],
  html: {
    title: TITLE
  },
  css: {
    modules: true
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    },
    proxy: {
      '/api': {
        target: `http://localhost:${API_PORT}`,
        changeOrigin: true
      }
    }
  },
  configureWebpack(config, context) {
    const tsLintRule = {
      test: /\.tsx?$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      options: {
        formatter: 'stylish',
        configFile: computePath('./tslint.json')
      }
    }

    config.module.rules = config.module.rules.concat(tsLintRule)

    const styleLintPlugin = new styleLint({
      configFile: computePath('./.stylelintrc.json')
    })

    const copyWebpackPlugin = new copyWebpack([
      {
        from: computePath('../static'),
        to: computePath('../dist/static')
      }
    ])

    config.plugins =
      context.command === 'build'
        ? config.plugins.concat(styleLintPlugin, copyWebpackPlugin)
        : config.plugins.concat(styleLintPlugin)

    return config
  }
})
