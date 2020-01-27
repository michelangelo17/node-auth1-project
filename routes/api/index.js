const router = require('express-promise-router')()
const registerRouter = require('./register')
const loginRouter = require('./login')
const usersRouter = require('./users')

module.exports = [
  router.use('/register', registerRouter),
  router.use('/login', loginRouter),
  router.use('/users', usersRouter),
]
