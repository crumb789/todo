module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/todo/'
      : '/' ,


      css: {
        loaderOptions: {
          sass: {
            prependData: '@import "@/assets/style.scss"; '
          }
        }
      }
  }