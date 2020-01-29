const db = require('../../../../data/dbConfig')

const getUsers = () => db.select('username').from('users')

module.exports = { getUsers }
