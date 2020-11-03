const env = require('./testing/testEnv')

const db = require('./db')
const spreadData = require('./testing/testData')
const { spreadTableMatch } = require('./utils')

// const knex = require('knex')
// const config = require('./knexfile.js').test
// const testDb = knex(config)

// beforeAll(() => testDb.migrate.latest())
// beforeEach(() => testDb.seed.run())

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initTestDb(testDb)
})

afterEach(() => env.cleanTestDb(testDb))


jest.mock('./utils', () => {
  return {
    spreadTableMatch: jest.fn()
  }
})




test('getJournalSpread: returns a spread object.', () => {
  return db.getJournalSpread(testDb)
  .then((spread) => {
    expect(spread.pos1_rune).toMatch('Fehu')
    expect(spread.pos1_aspect).toMatch('normal')
    expect(spread.pos1_image).toMatch('f')
    expect(spread.journal).toMatch('empty')
  })
})


test('addSpread: adds a spread to the database.', () => {
  spreadTableMatch.mockImplementation(spread => Promise.resolve(spread))

//  const spreadData = {
//     pos1_rune: 'Ansuz', 
//     pos1_aspect:'normal',
//     pos1_image:'a', 
//     pos2_rune: 'Berkano', 
//     pos2_aspect:'reversed',
//     pos2_image:'b', 
//     pos3_rune: 'Algiz', 
//     pos3_aspect:'normal',
//     pos3_image:'z', 
//     journal:'empty'
//   }

  // console.log('in',spreadData);
  console.log('out',spreadData);
  
  return db.addSpread(spreadData, testDb)
  .then((id) => {
    expect(spreadTableMatch).toHaveBeenCalled()
    expect(id).toHaveLength(1)
  })
})


