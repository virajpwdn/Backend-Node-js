const express = require("express");
const app = express();
const indexRouter = require("./router/index.routes");
const userRouter = require("./router/user.routes");
const requestRouter = require("./router/request.routes");
const authRouter = require("./router/auth.routes");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/request", requestRouter);

module.exports = app;
