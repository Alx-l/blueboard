const computePath = require('./utils').computePath
const styleLint = require('stylelint-webpack-plugin')

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
        target: `http://localhost:${ API_PORT }`,
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

    config.plugins = config.plugins.concat(styleLintPlugin)

    return config
  }
})
