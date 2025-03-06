const {Router} = require("express");
const controller = require("../controller/user.controller")
const userRouter = Router();
const authMiddleware = require("../middleware/authentication")

userRouter.post("/signup", controller.signupController)
userRouter.post("/login", controller.loginController)
userRouter.post("/create-post", authMiddleware, controller.createPostController)
userRouter.get("/profile", authMiddleware, controller.profileController)

module.exports = userRouter;