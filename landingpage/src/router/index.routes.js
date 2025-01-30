const {Router} = require('express');
const router = Router();
const controller = require('../controllers/index.controller')

router.get("/", controller.landingpagecontroller);

router.get("/register", controller.registerController)
router.post("/create-user", controller.createUserController)

router.get("/login", controller.loginController);
router.post("/find", controller.checkUserController);

module.exports = router;