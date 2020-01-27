const router = require('express-promise-router')()
const { valAuth } = require('../middleware')
const { validatePassword } = require('./middleware')

module.exports = router

router.post('/', valAuth, validatePassword, (req, res) => {
  res.json({ message: 'Logged in' })
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
