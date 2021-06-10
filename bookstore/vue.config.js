module.exports = {
    devServer: {
      proxy: {
        "^/api": {
          target: "https://api.abee.ir",
          changeOrigin: true,
          logLevel: "debug",
          // pathRewrite: { "^/api": "^/api" },
        },
      },
    }
  };