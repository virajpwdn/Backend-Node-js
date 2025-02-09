const {Router} = require('express');
const userRouter = Router();
const controller = require('../controller/user.controller');

userRouter.post("/signup", controller.signupController)

module.exports = userRouter;