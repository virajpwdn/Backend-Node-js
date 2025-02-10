const express = require('express')
const app = express();
const indexRouter = require('./router/index.routes');
const userRouter = require('./router/user.routes');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/user", userRouter);


module.exports = app;