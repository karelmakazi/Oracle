const env = require('./testing/testEnv')

const db = require('./db')
const spreadData = require('./testing/testData')
const { spreadTableMatch } = require('./utils')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initTestDb(testDb)
})

afterEach(() => env.cleanTestDb(testDb))

jest.mock('./utils', () => {
  return {
    spreadTableMatch: jest.fn(),
  }
})

describe('Tests all database functions', () => {
  test('getJournalSpread: returns a spread object.', () => {
    return db.getJournalSpread(testDb).then((spread) => {
      expect(spread.pos1_rune).toMatch('Fehu')
      expect(spread.pos1_aspect).toMatch('normal')
      expect(spread.pos1_image).toMatch('f')
      expect(spread.journal).toMatch('empty')
    })
  })

  test('addSpread: adds a spread to the database.', () => {
    spreadTableMatch.mockImplementation((spread) => Promise.resolve(spread))

    db.addSpread(spreadData, testDb).then((id) => {
      expect(spreadTableMatch).toHaveBeenCalled()
      expect(id).toHaveLength(1)
    })
  })

  test('addJournal: adds a journal entry to the database.', () => {
    let testJournal = 'This is a drill.'
    db.addJournal(2, testJournal, testDb).then((updated) => {
      expect(updated).toBe(1)
    })
  })
})
