const {Router} = require('express');
const router = Router();
const controller = require('../controllers/user.controller');

router.post("/register", controller.registerController)
router.post("/login", controller.loginController)


module.exports = router