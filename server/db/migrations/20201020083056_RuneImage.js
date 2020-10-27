exports.up = (knex) => {
  return knex.schema.table('spreads', (table) => {
    table.string('pos1_image')
    table.string('pos2_image')
    table.string('pos3_image')
  })
}

exports.down = (knex) => {
  knex.schema.dropTable('spreads')
}
