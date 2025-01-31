const {Router} = require('express');
const userRouter = Router();
const userController = require('../controllers/user.controller');

userRouter.post("/register", userController.registerController);
userRouter.post("/login", userController.loginController);
userRouter.get("/profile", userController.profileController);

module.exports = userRouter;