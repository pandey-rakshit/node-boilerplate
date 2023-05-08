const App = {
  appDebug: process.env.APP_DEBUG || false,
  appName: process.env.APP_NAME || "Node App",
  appVersion: process.env.APP_VERSION || "1.0.0",
  appPort: process.env.APP_PORT || "8080",
  appEnv: process.env.APP_ENV || "local",
};

module.exports = App;
