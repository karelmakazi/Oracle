exports.up = (knex) => {
  return knex.schema.createTable('spreads', (table) => {
    table.increments('spread_id').primary()
    table.timestamp('timestamp').defaultTo(knex.fn.now())
    table.string('pos1_rune')
    table.string('pos1_aspect')
    table.string('pos2_rune')
    table.string('pos2_aspect')
    table.string('pos3_rune')
    table.string('pos3_aspect')
    table.string('journal')
  })
}

exports.down = (knex) => { 
  knex.schema.dropTable('spreads')
}
