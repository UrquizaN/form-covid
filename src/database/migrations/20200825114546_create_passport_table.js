exports.up = (knex) => knex.schema.createTable('passport', (table) => {
    table.text('user_id').references('cpf').inTable('users')
    table.integer('symptoms')

    table.boolean('noSymptom')
    
    table.timestamp('created_at').defaultTo(knex.fn.now())
});
  
exports.down = knex => knex.schema.dropTable('passport')