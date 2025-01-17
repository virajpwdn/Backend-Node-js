const express = require('express');
// const controller = require('./controllers/index.controller');
// const userController = require('./controllers/user.controller');
const indexRoutes = require('./routes/index.routes');
const app = express();

// app.get('/', controller.indexController);

// app.get('/user', userController.userController);

console.log(indexRoutes);
app.use('/', indexRoutes);

module.exports = app;