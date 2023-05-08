const db = {
  db: process.env.DB,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUriLocal: process.env.DB_URI_LOCAL,
  dbUriServer: process.env.DB_URI_SERVER,
};

module.exports = db;
