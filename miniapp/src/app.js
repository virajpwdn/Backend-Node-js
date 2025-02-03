const express = require('express');
const app = express();
const indexRoutes = require("./router/index.routes");
const userRoutes = require("./router/user.routes");
const cookieParser = require('cookie-parser');

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/", indexRoutes);
app.use("/user", userRoutes);


module.exports = app;