exports.up = (knex) => knex.schema.createTable('symptoms', (table) => {
    table.increments('id')
    table.text('name').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
});
  
exports.down = knex => knex.schema.dropTable('symptoms')