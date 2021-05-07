const express = require('express')
const userRouter = express.Router()
const UserController = require('../controller/UserController')
userRouter.post('/sendmail', UserController.sendMail)
module.exports = userRouter