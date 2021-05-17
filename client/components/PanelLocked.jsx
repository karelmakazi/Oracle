import React from 'react'

const selectPanel =
  'flex flex-col h-cardInnerH w-cardInnerW rounded-lg border-4 border-redDark text-center justify-center'
const runeDisplay = 'rune-font'

function PanelLocked ({selected, orientation}) {
  const aspect = orientation ? 'reversed' : 'normal'

  return(
    <div className={selectPanel}>
      <div className={runeDisplay}>{selected.image}</div>
      <div className='meaningDisplay'>
        <p>{selected.meaning[aspect]}</p>
      </div>
    </div>
  )
}

export default PanelLocked