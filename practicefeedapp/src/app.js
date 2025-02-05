const express = require("express");
const indexRouter = require("./router/index.routes");
const userRouter = require("./router/user.routes");
const cookieParser = require("cookie-parser");
const methodOverride = require('method-override')
const app = express();


app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(methodOverride("_method"));



app.use("/", indexRouter);
app.use("/user", userRouter);


module.exports = app;