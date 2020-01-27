const valAuth = (req, res, next) => {
  if (!req.body.user && !req.body.password) {
    throw new Error('Must send both a user and a password')
  }
  if (!req.body.user) {
    throw new Error('Must send a password')
  }
  if (!req.body.password) {
    throw new Error('Must send a user')
  }
  next()
}

module.exports = { valAuth }
