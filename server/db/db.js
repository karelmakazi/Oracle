const connection = require('./connection')

module.exports = {
  getJournalSpread,
  addSpread,
  addJournal
}

function getJournalSpread(db=connection){
  return db('spreads')
  .select()
  .orderBy('timestamp', 'desc')
  .limit(1)
  .first()
  .then(res => { return res})
  .catch(err => (console.log(err)))
}

function addSpread (spread, db=connection) {
  return db('spreads')
  .insert({
    pos1_rune: spread.pos1_rune,
    pos1_aspect: spread.pos1_aspect,
    pos1_image: spread.pos1_image,
    pos2_rune: spread.pos2_rune,
    pos2_aspect: spread.pos2_aspect,
    pos2_image: spread.pos2_image,
    pos3_rune: spread.pos3_rune,
    pos3_aspect: spread.pos3_aspect,
    pos3_image: spread.pos3_image,
    journal: 'empty',
  })
  .then(id => {return id})
  .catch(err => (console.log(err)))
}

function addJournal(id, journal, db=connection){
  return db('spreads')
  .update({journal: journal})
  .where('spread_id', id)
  .catch(err => (console.log(err)))
}