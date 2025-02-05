const {Router} = require("express");
const indexRouter = Router();
const controller = require("../controller/index.controller");
const { isAuthenticate } = require("../middlewares/authenticate");

indexRouter.get("/", controller.getRegisterController);
indexRouter.get("/feed", isAuthenticate, controller.feedController);


module.exports = indexRouter;