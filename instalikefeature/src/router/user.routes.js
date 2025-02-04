const { Router } = require("express");
const userRouter = Router();
const controller = require("../controllers/user.controller");

userRouter.get("/register", controller.indexController);
userRouter.post("/register", controller.postRegisterController);

userRouter.get("/login", controller.loginController);
userRouter.post("/login", controller.postLoginController);

module.exports = userRouter;
