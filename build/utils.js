const path = require('path')

module.exports = {
  isDev(context) {
    return context.command === 'develop'
      ? true
      : false
  },
  computePath(string) {
    return path.resolve(__dirname, string)
  }
}
