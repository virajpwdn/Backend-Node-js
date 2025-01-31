const {Router} = require('express');
const router = Router();
const indexController = require('../controllers/index.controller');


router.get("/", indexController.heyController)

module.exports = router;