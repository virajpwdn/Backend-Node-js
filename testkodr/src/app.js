const express = require("express");
const app = express();
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes")
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/post", postRouter)


module.exports = app;
