const knex = require('knex')

const testConfig = require('../knexfile.js').test


module.exports = {
  getTestDb: () => knex(testConfig),
  initTestDb: db => 
    db.migrate.latest()
    .then(() => db.seed.run()),
  cleanTestDb: db => db.destroy()
}