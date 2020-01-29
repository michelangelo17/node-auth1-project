const router = require('express-promise-router')()
const db = require('./model')
const { valAuth } = require('../middleware')
const { hashPassword } = require('./middleware')

module.exports = router

router.post('/', valAuth, hashPassword, async (req, res) => {
  const { username } = await db.addUser(req.body)
  res.json({ message: `${username} successfully added!`, loggedIn: true })
})

router.use((err, req, res, next) =>
  res.status(500).json({
    message: 'Uh Oh! 500 Error!',
    error: err.message.replace(/\\/g, ''),
    loggedIn: false,
  })
)
