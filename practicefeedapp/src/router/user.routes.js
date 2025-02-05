const {Router} = require("express");
const userRouter = Router();
const controller = require("../controller/user.controller");

userRouter.post("/register", controller.postRegisterController);
userRouter.get("/create-post", controller.getCreatePostController);
userRouter.post("/create-post", controller.postCreatePostController);


module.exports = userRouter;