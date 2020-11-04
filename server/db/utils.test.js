const { spreadTableMatch } = require('./utils')

const testSpreadObject = {
  pos1_rune: 'Uruz',
  pos1_image: 'u',
  pos1_aspect: 'normal',
  pos2_rune: 'Riado',
  pos2_image: 'r',
  pos2_aspect: 'normal',
  pos3_rune: 'Fehu',
  pos3_image: 'f',
  pos3_aspect: 'reversed',
}

describe('Test database utility functions.', ()=>{
  test('spreadTableMatch: outputs a suitable spread object.', ()=>{
    const spreadToDatabase = spreadTableMatch(testSpreadObject)
    expect(spreadToDatabase.pos1_rune).toMatch('Uruz')
    expect(spreadToDatabase.pos2_image).toMatch('r')
    expect(spreadToDatabase.pos3_aspect).toMatch('reversed')
    expect(spreadToDatabase).toHaveProperty('journal')
    expect(spreadToDatabase.journal).toMatch('empty')
    
  })
})