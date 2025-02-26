const express = require('express');
const app = express();
const indexRoutes = require('./router/user.routes')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/", indexRoutes);



module.exports = app;