const {Router} = require('express');
const router = Router();
const controller = require('../controllers/index.controller')

router.get("/", controller.loginForm)
router.post("/login", controller.loginController);

router.get("/upload", controller.uploadForm)
router.patch("/upload", controller.uploadController)


router.get("/findlogin", controller.findinglogin)
router.get("/cookiedata", controller.profileController)

module.exports = router