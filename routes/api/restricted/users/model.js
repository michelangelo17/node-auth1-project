const db = require('../../../../data/dbConfig')

const getUsers = () => db.select('user').from('users')

module.exports = { getUsers }
