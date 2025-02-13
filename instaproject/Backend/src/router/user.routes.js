const { Router } = require("express");
const userRouter = Router();
const controller = require("../controller/user.controller.js");
const {authUser} = require("../middleware/validation.js")

userRouter.post("/register", controller.reqisterController);
userRouter.post("/login", controller.loginController);
userRouter.get("/profile", authUser, controller.profileController)

module.exports = userRouter;
