const express = require("express");
const app = express();
const { userModel } = require("./models/model");
const path = require("path");
const router = require('./routes/index.routes');

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.json());
app.use("/", router);



app.use(router);

module.exports = {
  app,
};
