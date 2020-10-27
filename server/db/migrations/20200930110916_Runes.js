
exports.up = (knex) => {
  return knex.schema.createTable('runes', (table) => {
    table.increments('rune_id').primary()
    table.string('name')
    table.string('image')
    table.text('meaning')
    table.boolean('reversible')
  })
}

exports.down = (knex) => {
  knex.schema.dropTable('runes')
}
