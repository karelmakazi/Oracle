const env = require('./testing/testEnv')
const db = require('./db')

const { spreadTableMatch } = require('./utils')

jest.mock('./utils', () => {
  return {
    spreadTableMatch: jest.fn()
  }
})

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initTestDb(testDb)
})

afterEach(() => env.cleanTestDb(testDb))


test('getJournalSpread: returns a spread object.', () => {
  return db.getJournalSpread(testDb)
    .then(spread => {
      expect(spread).toHaveProperty('journal')
      console.log(spread.pos1_rune)
    })
})
