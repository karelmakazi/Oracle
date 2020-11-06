import { addRune, updateRuneList } from './index'
import passedList from '../../server/data/runes'

describe('Test all Redux actions', () => {
  test('addRune: returns correct action.', () => {
    let testPosition = '1'
    let testRune = {
      revButtonText: 'Reverse',
      runeCommited: false,
      selRuneAspect: 'normal',
      selRuneId: 1,
      selRuneImage: 'f',
      selRuneName: 'Fehu',
    }
    let testAction = addRune(testPosition, testRune)

    expect(testAction.type).toBe(`RUNE_POSITION_${testPosition}`)
    expect(testAction).toHaveProperty('rune')
    expect(testAction.rune).toHaveProperty('selRuneId')
  })

  test('updateRuneList: return correct action.', () => {
    let testRune = 'Fehu'
    let testAction = updateRuneList(testRune, passedList)
    expect(testAction.type).toBe('UPDATE_RUNELIST')
    expect(testAction.passedList.runes.length).toBe(25)
  })
})
