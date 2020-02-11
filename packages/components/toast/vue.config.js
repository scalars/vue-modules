module.exports = {
  outputDir: "lib",
  css: {
    extract: false
  },
  runtimeCompiler: true,
  configureWebpack: {
    externals: ["vue"]
  }
};
