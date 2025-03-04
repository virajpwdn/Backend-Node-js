const {Router} = require('express');
const projectRoutes = Router();
const controller = require('../controllers/project.controller')

projectRoutes.post('/create', controller.create);
projectRoutes.get("/list", controller.listController)

module.exports = projectRoutes;