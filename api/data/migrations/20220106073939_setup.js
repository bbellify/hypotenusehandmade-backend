exports.up = async (knex) => {
    await knex.schema
      .createTable('users', table => {
        table.increments('user_id')
        table.string('username', 15).notNullable().unique()
        table.string('password', 200).notNullable()
      })
      
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('users')
  }
  