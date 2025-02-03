const {Router} = require('express');
const indexRouter = Router();
const controller = require("../controllers/index.controller")

indexRouter.get("/", controller.indexController)
indexRouter.get("/feed", controller.feedController)


module.exports = indexRouter;