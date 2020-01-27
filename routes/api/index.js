const router = require('express-promise-router')()
const registerRouter = require('./register')
const loginRouter = require('./login')
const logoutRouter = require('./logout')
const restrictedRouter = require('./restricted')

module.exports = [
  router.use('/register', registerRouter),
  router.use('/login', loginRouter),
  router.use('/logout', logoutRouter),
  router.use('/restricted', restrictedRouter),
]
