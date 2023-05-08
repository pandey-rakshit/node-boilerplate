const mongoose = require("mongoose");
const config = require("@config/index");

const { dbUriLocal, dbUriServer } = config.get("db");

const { appEnv } = config.get("App");

const dbUri = appEnv === "local" ? dbUriLocal : dbUriServer;

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`mongodb Connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(`mongodb Connection Error : ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
