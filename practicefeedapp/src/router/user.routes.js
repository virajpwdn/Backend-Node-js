const {Router} = require("express");
const userRouter = Router();
const controller = require("../controller/user.controller");
const { isAuthenticate } = require("../middlewares/authenticate");

userRouter.post("/register", controller.postRegisterController);
userRouter.get("/create-post", controller.getCreatePostController);
userRouter.post("/create-post", isAuthenticate, controller.postCreatePostController);

userRouter.get("/login", controller.getLoginController)
userRouter.post("/login", controller.postLoginController)

userRouter.get("/logout", controller.logoutController)

userRouter.get("/edit", isAuthenticate, controller.getEditController);
userRouter.patch("/edit", isAuthenticate, controller.postEditController)


userRouter.get("/profile", isAuthenticate, controller.getProfileController);


module.exports = userRouter;