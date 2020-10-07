const config = require('../knexfile').development
const db = require('knex')(config)

module.exports = {
  addSpread
}


function addSpread (spread) {
  console.log('SUP', spread);
  return db('spreads')
  .insert({
    pos1_rune: spread.pos1_rune,
    pos1_aspect: spread.pos1_aspect,
    pos2_rune: spread.pos2_rune,
    pos2_aspect: spread.pos2_aspect,
    pos3_rune: spread.pos3_rune,
    pos3_aspect: spread.pos3_aspect,
    journal: 'empty',
  })
  .then(id => {return id})
  .catch(err => (console.log(err)))
}