const authRouter = require('express').Router()
const usersController = require('../controllers/users.controller')

authRouter.post('/', usersController.login)

module.exports = authRouter