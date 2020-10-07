const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getJournalSpread()
  .then(result => res.json(result))
  .catch(err => (console.log(err)))
})

router.post('/addSpread', (req,res) => {
  db.addSpread(req.body)
  .then(id => res.json(id))
  .catch(err => (console.log(err)))
})

module.exports = router