const express = require("express");
const app = express();
const indexRouter = require("./routes/index.routes");
const userRouter = require("./routes/user.routes");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:"http://localhost:5173", credentials:true}))

app.use("/", indexRouter);
app.use("/user", userRouter);

module.exports = app;
