const router = require('express-promise-router')()
const usersRouter = require('./users')

module.exports = [router.use('/users', usersRouter)]
