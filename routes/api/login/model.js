const db = require('../../../data/dbConfig')

const findUser = async user => (await db('users').where('user', user))[0]

module.exports = { findUser }
