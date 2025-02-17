const express = require('express')
const app = express();
const indexRouter = require('./router/index.routes');
const userRouter = require('./router/user.routes');
const postRouter = require('./router/post.routes')
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({origin: "http://localhost:5173", credentials:true}))

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

// what is cors policy and why it used for integration?
// What is nullable?
// What is axios extends?
// What are join between two collection?

module.exports = app;