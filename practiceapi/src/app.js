const express = require("express");
const app = express();
const indexRoutes = require("./router/index.routes");
const cookieparser = require("cookie-parser");

app.use(cookieparser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoutes);

module.exports = app;
