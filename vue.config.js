module.exports = {
  lintOnSave: false,
  configureWebpack: {
    entry: {
      app : __dirname + "/src/frontend/main.ts"
    },
    output: {
      path: __dirname + "/dist/frontend"
    }
  }
}