export function spreadMaker(spread){
  const spreadPos1 = spread.spreadPos1.runePosition1
  const spreadPos2 = spread.spreadPos2.runePosition2
  const spreadPos3 = spread.spreadPos3.runePosition3

  let spreadObject = {
    pos1_rune: spreadPos1.selRuneName,
    pos1_image:spreadPos1.selRuneImage,
    pos1_aspect: spreadPos1.selRuneAspect,
    pos2_rune: spreadPos2.selRuneName,
    pos2_image:spreadPos2.selRuneImage,
    pos2_aspect: spreadPos2.selRuneAspect,
    pos3_rune: spreadPos3.selRuneName,
    pos3_image:spreadPos3.selRuneImage,
    pos3_aspect: spreadPos3.selRuneAspect,
  }
  return spreadObject
}

export function reverseStyleMaker(current){
  let style = (current === 'Reverse')
    ? 'runeImage'
    : 'runeImage runeReversed'
  return style
}

export function reverseButtonText(button){
  let updatedButton = button
    ? (button === 'Reverse' ? 'Undo' : 'Reverse')
    : 'Reverse'
  return updatedButton
}

export function updateAspect(current){
  let updatedAspect = current === 'normal'
    ? 'reversed'
    : 'normal'
  return updatedAspect
}