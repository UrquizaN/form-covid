exports.up = (knex) => knex.schema.createTable('users', (table) => {
    table.text('cpf').unique().notNullable().primary()
    table.text('name').notNullable()
    table.integer('user_type').notNullable()
    table.integer('identification').notNullable().unique()

    table.timestamp('created_at').defaultTo(knex.fn.now())
});
  
exports.down = knex => knex.schema.dropTable('users')