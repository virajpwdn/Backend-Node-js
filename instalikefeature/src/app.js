const express = require('express');
const app = express();
const indexRouter = require('./router/index.routes');
const userRouter = require('./router/user.routes');
const cookieParser = require('cookie-parser');

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/", indexRouter);
app.use("/user", userRouter);



module.exports = app;