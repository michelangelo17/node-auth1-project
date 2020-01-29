const bcrypt = require('bcryptjs')

const hashPassword = (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 14)
  next()
}

module.exports = { hashPassword }
