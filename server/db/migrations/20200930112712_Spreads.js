exports.up = (knex) => {
  return knex.schema.createTable('spreads', (table) => {
    table.increments('spread_id').primary()
    table.timestamp('timestamp').defaultTo(knex.fn.now())
    table.integer('pos1_rune')
    table.integer('pos1_reversed')
    table.integer('pos2_rune')
    table.integer('pos2_reversed')
    table.integer('pos3_rune')
    table.integer('pos3_reversed')
    table.integer('journal')
  })
}

exports.down = (knex) => { 
  knex.schema.dropTable('spreads')
}
  