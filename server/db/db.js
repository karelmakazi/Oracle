const connection = require('./connection')

const { spreadTableMatch } = require('./utils')

module.exports = {
  getJournalSpread,
  addSpread,
  addJournal,
}

function getJournalSpread(db = connection) {
  return db('spreads')
    .select()
    .orderBy('timestamp', 'desc')
    .first()
}

function addSpread(spread, db = connection) {
  const matchedSpread = spreadTableMatch(spread)
  return db('spreads')
    .insert(matchedSpread)
    .then((id) => {
      return id
    })
}

function addJournal(id, journal, db = connection) {
  return db('spreads')
    .update({ journal: journal })
    .where('spread_id', id)
}
