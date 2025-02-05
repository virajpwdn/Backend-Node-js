const {Router} = require("express");
const indexRouter = Router();
const controller = require("../controller/index.controller");

indexRouter.get("/", controller.getRegisterController);
indexRouter.get("/feed", controller.feedController);


module.exports = indexRouter;