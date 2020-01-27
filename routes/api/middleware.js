const valAuth = (req, res, next) => {
  if (!req.body.user && !req.body.password) {
    throw new Error('Must send both a username and a password')
  }
  next()
}

module.exports = { valAuth }
