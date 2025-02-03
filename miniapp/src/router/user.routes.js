const {Router} = require('express');
const userRouter = Router();
const controller = require("../controllers/user.controller")

userRouter.get("/register", controller.registerController);
userRouter.post("/register", controller.postRegisterController)

userRouter.get("/login", controller.loginController)


module.exports = userRouter;