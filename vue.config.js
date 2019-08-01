module.exports = {
  configureWebpack: {
    devServer: {
      before: require("./mock")
    }
  }
};
