const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  configureWebpack: {
    plugins: [
     /*  new ModuleFederationPlugin({
        name: 'app2',  // 当前APP作为remote暴露组件时的APP的名字
        library: {
          type: 'var',
          name: 'app2'
        }, // 当前APP作为remote暴露组件时的library名字
        filename: 'remoteApp2Entry.js',
        // 所有被暴露的组件会打包到这个文件中，同理使用者也需要从这里引入
        remotes: {
          // app_two: "app_two_remote",  
          // app_three: "app_three_remote"  
        }, // 定义该库作为host时可能要引用的remote
        exposes: {
          './AppContainer': './src/CommonA.vue',
        }, // 定义该库作为remote时，要暴露出去的组件。左边是相对路径和组件名字（其他库使用时候），右边是该组件在本库内的路径
        // shared: ["react", "react-dom","react-router-dom"]// 和引入的组件公用的dependency
        shared: require('./package.json').dependencies
      }) */
    ]
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },
  devServer: {
    port: '8080'
  }
})
