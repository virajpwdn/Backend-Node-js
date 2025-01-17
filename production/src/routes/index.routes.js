const express = require('express');
const controller = require('../controllers/index.controller');
const router = express.Router();


console.log("Index routes loaded");


router.get('/', controller.indexController); 

module.exports = router;