const db = require('../../../data/dbConfig')

const addUser = async userData =>
  (await db('users').insert(userData, ['user']))[0]

module.exports = { addUser }
