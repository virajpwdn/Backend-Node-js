const {Router} = require("express");
const authRouter = Router();
const controller = require("../controller/auth.controller")
const authMiddleware = require("../middleware/authentication.js")

authRouter.post("/signup", controller.signupController);
authRouter.post("/login", authMiddleware, controller.loginController);

module.exports = authRouter;