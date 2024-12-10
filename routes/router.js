const express = require('express')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const projectController = require('../controllers/projectController')
const multerMiddleware = require('../middlewares/multerMiddleware')

const router = new express.Router()

// register - post
router.post('/register',userController.registerController)

// login - post
router.post('/login',userController.loginController)

// add-project - post
router.post('/add-project',jwtMiddleware,multerMiddleware.single('projectImage'),projectController.addProjectController)

// home-projects - get
router.get('/home-projects',projectController.getHomeProjectsController)

// user-projects - get
router.get('/user-projects',jwtMiddleware,projectController.getUserProjectsController)

// all-projects - get
router.get('/all-projects',jwtMiddleware,projectController.getAllProjectsController)

module.exports = router