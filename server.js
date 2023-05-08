require("dotenv").config("*.env");
require("module-alias/register");

const express = require("express");
const morgan = require("morgan");
const path = require("path");

const cors = require("cors");

const connectDb = require("@app/database/connection");

const routes = require("@app/routers/index");
const requestData = require("@app/middleware/requestData");

const config = require("@config/index");

const app = express();

const PORT = config.get("App.appPort");

app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({ origin: true }));

app.use(requestData);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static("public"));

// database connection
connectDb();

// routes
app.use(`/apis`, routes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
