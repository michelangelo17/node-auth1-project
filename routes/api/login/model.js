const db = require('../../../data/dbConfig')

const findUser = async user =>
  await db('users')
    .where('user', user)
    .first()

module.exports = { findUser }
