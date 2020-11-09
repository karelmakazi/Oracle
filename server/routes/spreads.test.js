const request = require('supertest')
const server = require('../server')
const db = require('../db/db')

jest.mock('../db/db', () => {
  return {
    getJournalSpread: jest.fn(),
    addSpread: jest.fn(),
    addJournal: jest.fn(),
  }
})

const mockSpread = {
  spread_id: 22,
  timestamp: '2020-11-04 19:58:31',
  pos1_rune: 'Wunjo',
  pos1_aspect: 'normal',
  pos2_rune: 'Isa',
  pos2_aspect: 'normal',
  pos3_rune: 'Eihwaz',
  pos3_aspect: 'normal',
  journal: 'empty',
  pos1_image: 'w',
  pos2_image: 'i',
  pos3_image: 'I',
}

describe('GET /v1/spreads', () => {
  test('Retrieves a spread object.', () => {
    db.getJournalSpread.mockImplementation(() => Promise.resolve(mockSpread))

    expect.assertions(1)
    return request(server)
      .get('/v1/spreads')
      .expect(200)
      .then((res) => {
        expect(res.body.spread_id).toBe(22)
      })
  })

  test('Responds with an error code on failure.', () => {
    db.getJournalSpread.mockImplementation(() =>
      Promise.reject(new Error('Test Error'))
    )
    
    expect.assertions(1)
    return request(server)
      .get('/v1/spreads')
      .expect(500)
      .then((res) => {
        expect(res.text).toMatch('DATABASE ERROR: Test Error')
      })
  })
})

describe('POST /v1/spreads/addSpread', () => {
  test('Posts a new spread to the database.', () => {
    db.addSpread.mockImplementation(() => Promise.resolve('1'))

    expect.assertions(1)
    return request(server)
      .post('/v1/spreads/addSpread')
      .expect(201)
      .then((res) => {
        expect(res.text).toBe('Created')
      })
  })

  test('Responds with an error code on failure.', () => {
    db.addSpread.mockImplementation(() =>
      Promise.reject(new Error('Test Error'))
    )

    expect.assertions(1)
    return request(server)
      .post('/v1/spreads/addSpread')
      .expect(500)
      .then((res) => {
        expect(res.text).toMatch('DATABASE ERROR: Test Error')
      })
  })
})

describe('POST /v1/spreads/addJournal', () => {
  test('Updates the spread entry with the journal content.', () => {
    db.addJournal.mockImplementation(() => Promise.resolve())

    expect.assertions(1)
    return request(server)
      .post('/v1/spreads/addJournal')
      .expect(201)
      .then((res) => {
        expect(res.text).toBe('Created')
      })
  })

  test('Responds with an error code on failure.', () => {
    db.addJournal.mockImplementation(() =>
      Promise.reject(new Error('Test Error'))
    )

    expect.assertions(1)
    return request(server)
      .post('/v1/spreads/addJournal')
      .expect(500)
      .then((res) => {
        expect(res.text).toMatch('DATABASE ERROR: Test Error')
      })
  })
})
