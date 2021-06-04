module.exports = {
  publicPath: '/info',
  outputDir: '../docs',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'สุภัค พุกดำ'
      return args
    })
  }
}
