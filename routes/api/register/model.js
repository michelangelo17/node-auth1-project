const db = require('../../../data/dbConfig')

const addUser = async userData =>
  (await db('users').insert(userData, ['username']))[0]

module.exports = { addUser }
