module.exports = {
    css: {
      loaderOptions: {
        less: {
          modifyVars: {
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true
        }
      }
    },
    devServer: {
       // proxy: {
    //   '/api': {
    //     target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
      port: 8085,
      host: '0.0.0.0',
      open: true,
      proxy: 'http://127.0.0.1:8001',
      disableHostCheck: true,
    },
  }