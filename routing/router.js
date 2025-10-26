const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

// register route
router.post('/register', userController.registerLogicAPI)

module.exports = router
