import React from 'react'

// LAYOUT
const cardFirstPanel =
  'flex flex-col h-cardInnerH w-cardInnerW rounded-lg bg-redMid border-4 border-redDark text-center justify-center'

// TYPOGRAPHY
const cardH1 = 'pb-10 font-semibold text-5xl text-redDark'
const cardH3 = 'pt-10 font-semibold text-2xl text-redDark'
const selectButton = 'font-semibold text-2xl text-redDark hover:text-redLight'

function PanelInactive({ adjustStatus }) {
  return (
    <div className={cardFirstPanel}>
      <h3 className={cardH3}>RUNE ONE</h3>
      <h1 className={cardH1}>THE OVERVIEW</h1>
      <button onClick={() => adjustStatus('up')} className={selectButton}>
        SELECT
      </button>
    </div>
  )
}

export default PanelInactive

