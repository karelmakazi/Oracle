import { TestScheduler } from 'jest'
import runeList from './runeList'
import { runeFilter } from '../lib'

jest.mock('../lib.js', () => {
  return {
    runeFilter: jest.fn(),
  }
})

const testList = ['Fehu', 'Kano', 'Algiz']
const actionList = ['UPDATE_RUNELIST', 'FAILURE']

const actionMaker = (option) => {
  return {
    type: actionList[option],
    selRune: 'Fehu',
    passedList: testList
  }

}

describe('Test Redux reducer: runeList.', () => {
  test('runeList: calls runeFilter.', () => {
  
    runeFilter.mockImplementation((testList) => Promise.resolve(testList))
    let testReducer = runeList(testList, actionMaker(0))
    expect(runeFilter).toHaveBeenCalled()
    expect(testReducer).toHaveProperty('runes')
  })

  test('runeList: returns default value.', ()=> {
    let testReducer = runeList(testList, actionMaker(1))
    expect(testReducer).not.toHaveProperty('runes')

  })
})
