const express = require('express')
const db = require('../db')
const router = express.Router()


router.get('/', (req, res) => {
  db.getJournalSpread()
  .then(result => res.json(result))
  .catch(err => {console.log(err)
    res.status(500).send('ERROR')})
})

router.post('/addSpread', (req,res) => {
  db.addSpread(req.body)
  // .then(id => res.json(id))
  .then(res.redirect('/'))
  .catch(err => {console.log(err)
    res.status(500).send('ERROR')})
})

router.post('/addJournal', (req,res) => {
  db.addJournal(req.body.id, req.body.journal)
  .catch(err => {console.log(err)
    res.status(500).send('ERROR')})
})

module.exports = router