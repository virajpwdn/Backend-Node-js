const {Router} = require('express');
const requestRouter = Router();
const controller = require('../controller/request.controller');
const {customValidation} = require('../middleware/middleware');

requestRouter.post("/send/:status/:userId", customValidation, controller.connectionController)

module.exports = requestRouter;