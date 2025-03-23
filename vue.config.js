const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        assets: "@/assets",
        router: "@/router",
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#4d6bfe",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
});
