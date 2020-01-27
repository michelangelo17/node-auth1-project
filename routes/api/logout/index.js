const router = require('express-promise-router')()

module.exports = router

router.get('/', (req, res) => {
  const user = req.session.user
  req.session &&
    req.session.destroy(err => {
      if (err) {
        return res.json({ message: 'Logout unsuccessful, please try again!' })
      }
      if (user) {
        return res.json({ message: `${user} logged out!` })
      }
      res.json({ message: 'No user to logoout!' })
    })
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
