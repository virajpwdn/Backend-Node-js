const express = require("express");
const app = express();
const indexRoutes = require("./router/index.routes");
const cookieparser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRoutes);

module.exports = app;



/**
 * Learn what are middleware all its types, levels of middlewares, error handling middleware
 */


/**
 * Token are sent through headers
 * console.log(req.headers) -> here in headers we will find jwt token
 * Header -> Authorizarion -> berear: generated token
 * console.log(req.headers.authorization)
 */