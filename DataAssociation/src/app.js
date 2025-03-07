const express = require("express");
const app = express();
const cookieparser = require('cookie-parser');
const userRouter = require("./routes/user.routes")


app.set("view engine", "ejs");
app.set("views", "./src/views");


  

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());


app.use("/user", userRouter);


module.exports = app;