const {Router} = require('express');
const authRouter = Router();
const controller = require("../controller/auth.controller");

authRouter.post("/login", controller.loginController);

module.exports = authRouter;