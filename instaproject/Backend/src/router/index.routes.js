const {Router} = require('express');
const indexRouter = Router();
const controller = require("../controller/index.controller");
const {authUser} = require('../middleware/validation')

indexRouter.get("/feed",authUser, controller.feedController)

module.exports = indexRouter;