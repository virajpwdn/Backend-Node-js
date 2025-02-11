const { Router } = require("express");
const userRouter = Router();
const controller = require("../controller/user.controller");
const {customValidation} = require('../middleware/middleware')

userRouter.post("/signup", controller.signupController);
userRouter.patch("/edit", customValidation, controller.editController);

module.exports = userRouter;
