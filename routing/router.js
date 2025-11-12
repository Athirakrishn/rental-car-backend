const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()


router.post('/register', userController.registerLogicAPI)

module.exports = router
