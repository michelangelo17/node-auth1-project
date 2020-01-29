const valAuth = (req, res, next) => {
  console.log(req.body)
  if (!req.body.username && !req.body.password) {
    throw new Error('Must send both a username and a password')
  }
  if (!req.body.username) {
    throw new Error('Must send a username')
  }
  if (!req.body.password) {
    throw new Error('Must send a password')
  }
  next()
}

const restrictedCheck = (req, res, next) =>
  req.session && req.session.user
    ? next()
    : res.status(401).json({ message: 'You shall not pass!', loggedIn: false })

module.exports = { valAuth, restrictedCheck }
