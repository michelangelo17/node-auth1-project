const bcrypt = require('bcryptjs')
const { findUser } = require('./model')

const validatePassword = async (req, res, next) => {
  const user = await findUser(req.body.user)
  if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(401).json({ message: 'You shall not pass!' })
  }
  next()
}

module.exports = { validatePassword }
