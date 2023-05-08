const _ = require("lodash");
const App = require("./app");
const db = require("./database");

const config = {
  App,
  db,
};

const get = (key) => {
  return _.get(config, key, null);
};

module.exports = { get };
