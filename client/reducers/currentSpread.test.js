import currentSpread from './currentSpread'
import sampleSpread from '../testing/sampleSpread'

const actionList = ['CURRENT_STATE', 'FAILURE']

const actionMaker = (option) => {
  return {
    type: actionList[option],
    spread: sampleSpread,
  }
}

describe('Test Redux reducer: currentSpread.', () => {
  test('currentSpread: returns updated spread.', () => {
    let testReducer = currentSpread(actionList, actionMaker(0))
    expect(testReducer).toHaveProperty('spread')
  })

  test('currentSpread: returns default state', ()=> {
    let testReducer = currentSpread(actionList, actionMaker(1))
    expect(testReducer.spread).toBe(undefined)
  })
})