module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 配置别名
        // 在 cli3 中，vue 已经配置了 src 的别名为 @
        // 所以，使用 @ 就相当于使用 src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'api': '@/api',
        'views': '@/views'
      }
    }
  }
}