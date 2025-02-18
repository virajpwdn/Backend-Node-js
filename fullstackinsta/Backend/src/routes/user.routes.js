const { Router } = require("express");
const userRouter = Router();
const controller = require("../controller/user.controller");
const { authecticate } = require("../middleware/auth");

userRouter.post("/register", controller.registerController);
userRouter.get("/profile", authecticate, controller.profileController);
userRouter.post("/login", controller.loginController);

module.exports = userRouter;
