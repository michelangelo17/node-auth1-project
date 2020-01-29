const db = require('../../../data/dbConfig')

const findUser = async user =>
  await db('users')
    .where('username', user)
    .first()

module.exports = { findUser }
