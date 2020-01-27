exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('_id')
    table
      .text('user')
      .unique()
      .index()
      .notNullable()
    table
      .text('password')
      .unique()
      .notNullable()
  })

exports.down = knex => knex.schema.dropTableIfExists('users')
