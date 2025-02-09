const {Router} = require('express');
const indexRouter = Router();
const controller = require('../controller/index.controller');
const {customValidation} = require('../middleware/middleware');

indexRouter.get("/feed", customValidation, controller.feedController)

module.exports = indexRouter;