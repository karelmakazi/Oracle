import runePosition from './runePosition'

const testState = []
const actionList = [
  'RUNE_POSITION_1',
  'RUNE_POSITION_2',
  'RUNE_POSITION_3',
  'FAILURE'
]
const actionMaker = (option) => {
  return {
    type: actionList[option],
    rune: 'Fehu'
  }
}

describe('Test Redux reducer: runePosition.', ()=> {
  test('runePosition: switch return correct option', () => {
    let testReducer1 = runePosition(testState, actionMaker(0))
    let testReducer2 = runePosition(testState, actionMaker(1))
    let testReducer3 = runePosition(testState, actionMaker(2))
    expect(testReducer1[0]).toHaveProperty('runePosition1')
    expect(testReducer2[0]).toHaveProperty('runePosition2')
    expect(testReducer3[0]).toHaveProperty('runePosition3')
  })

  test('runePosition: returns default value.', ()=> {
    let testReducer = runePosition(testState, actionMaker(3))
    expect(testReducer).toHaveLength(0)
   ;
  })
})