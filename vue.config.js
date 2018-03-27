module.exports = {
  lintOnSave: false,
  configureWebpack: {
    entry: {
      main: __dirname + "/src/frontend/modules/main/index.ts",
      login: __dirname + "/src/frontend/modules/login/index.ts",
      logout: __dirname + "/src/frontend/modules/logout/index.ts"
    },
    output: {
      path: __dirname + "/dist/frontend"
    }
  }
}