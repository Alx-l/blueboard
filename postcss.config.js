module.exports = ({ file, options, env }) => ({
  plugins: {
    cssnano:
      env === 'production'
        ? {
            discardUnused: true
          }
        : false,
    autoprefixer:
      env === 'production'
        ? {
            browsers: ['last 2 versions', 'not dead']
          }
        : false,
    ['css-mqpacker']:
      env === 'production'
        ? {
            sort: true
          }
        : false,
    ['postcss-bubbly-grid']: {},
    ['postcss-pxtorem']: {
      rootValue: 16,
      unitPrecision: 5,
      propWhiteList: ['*', '!letter-spacing', '!text-shadow', '!border-radius'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
})
