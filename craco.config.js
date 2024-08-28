const path = require('path')
const lessPlugin = require("craco-less")
const pxtorem = require('postcss-pxtorem')

module.exports = {

  devServer: {
    proxy: {
      "/": {
        target: 'http://192.168.110.180:14000/',
        changeOrigin: true,
      }
    }
  },
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [[
            pxtorem({
              rootValue: 37.5,//根据ui提供的效果图修改  看是1x还是2x
              propList: ['*'],
              minPixelValue: 3,
              exclude: /node_modules/i,
            })]],
        },
      },
    },
  },
  // 插件
  plugins: [
    {
      plugin: lessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // antdv 主题之类的配置
            // modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true
          }
        },

      }
    }
  ],
  // 如果没安装，可以删除
  babel: {
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
  }
}