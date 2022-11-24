const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js', // 必須パラメータ
      title: 'Kai Hoshino | Portfolio Website',
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  outputDir : 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-website/'
    : '/',
  assetsDir: './',
}



// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: [
//     'vuetify'
//   ]
// })
