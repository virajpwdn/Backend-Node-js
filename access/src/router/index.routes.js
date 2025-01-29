const {Router} = require('express');
const router = Router();
const controller = require('../controllers/index.controller');

router.post("/register", controller.registerController)


module.exports = router