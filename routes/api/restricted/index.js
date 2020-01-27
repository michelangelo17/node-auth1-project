const router = require('express-promise-router')()
const { restrictedCheck } = require('./middleware')
const usersRouter = require('./users')

module.exports = [router.use('/users', restrictedCheck, usersRouter)]
