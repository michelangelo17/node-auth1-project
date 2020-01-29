const router = require('express-promise-router')()
const db = require('./model')

module.exports = router

router.get('/', async (req, res) =>
  res.json({ users: [...(await db.getUsers())], loggedIn: true })
)

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
