module.exports = {
  spreadTableMatch
}

function spreadTableMatch(spread){
  let matchedSpread = { 
    pos1_rune: spread.pos1_rune,
    pos1_aspect: spread.pos1_aspect,
    pos1_image: spread.pos1_image,
    pos2_rune: spread.pos2_rune,
    pos2_aspect: spread.pos2_aspect,
    pos2_image: spread.pos2_image,
    pos3_rune: spread.pos3_rune,
    pos3_aspect: spread.pos3_aspect,
    pos3_image: spread.pos3_image,
    journal: 'empty',
  }
  return matchedSpread
}