// import { reverseStyleMaker, reverse } from './lib'
import * as lib from './lib'
import runeData from '../server/data/runes'
import sampleSpread from './testing/sampleSpread'

describe('Test all client helper functions', () => {
  test('spreadMaker: returns a compiled spread.', () => {
    let testSpread = lib.spreadMaker(sampleSpread)
    expect(testSpread.pos1_rune).toMatch('Fehu')
    expect(testSpread.pos2_image).toMatch('a')
    expect(testSpread.pos3_aspect).toMatch('normal')
  })

  test('reverseStyleMaker: returns accurate styling.', () => {
    let reverseResult = lib.reverseStyleMaker('Reverse')
    let normalResult = lib.reverseStyleMaker('Undo')
    expect(reverseResult).toMatch('runeImage')
    expect(normalResult).toMatch('runeImage runeReversed')
  })

  test('reverseButtonText: returns correct button text.', () => {
    let reverseButton = lib.reverseButtonText('Reverse')
    let normalButton = lib.reverseButtonText('Undo')
    expect(reverseButton).toMatch('Undo')
    expect(normalButton).toMatch('Reverse')
  })

  test('updateAspect: flips symbol aspect.', () => {
    let aspectNormal = lib.updateAspect('normal')
    let aspectReversed = lib.updateAspect('reversed')
    expect(aspectNormal).toMatch('reversed')
    expect(aspectReversed).toMatch('normal')
  })

  test('feedbackCompiler: returns accurate feedback message.', () => {
    let feedbackSpread = lib.feedbackCompiler('spread')
    let feedbackReflection = lib.feedbackCompiler('journal')
    expect(feedbackSpread).toContain('spread')
    expect(feedbackReflection).toContain('journal')
  })

  test('runeFilter: returns an array without selected rune.', () => {
    let selectedRune = ['Fehu']
    let filteredList = lib.runeFilter(selectedRune[0], runeData)

    let nameCheckList = filteredList.map((item) => item.name)
    expect(nameCheckList.length).toBe(24)
    expect(nameCheckList).toEqual(expect.not.arrayContaining(selectedRune))
  })
})
