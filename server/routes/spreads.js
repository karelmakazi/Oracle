const express = require('express')
const router = express.Router()
const db = require('../db/db')


//TEST 
router.post('/test', )

router.get('/', (req, res) => {
  db.getJournalSpread()
    .then((currentSpread) => res.json(currentSpread))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/addSpread', (req, res) => {
  db.addSpread(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/addJournal', (req, res) => {
  const { id, journal } = req.body
  db.addJournal(id, journal)
    .then(() => res.sendStatus(201))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/', (req, res) => {
  const { id } = req.body
  db.clearSpread(id)
  .then(() => res.sendStatus(200))
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' 
    + err.message)
  })
})


module.exports = router
