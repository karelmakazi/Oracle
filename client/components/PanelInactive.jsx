import React from "react"

import VectorFrame from './VectorFrame'

// LAYOUT
const redPanel =
  "flex flex-col h-cardInnerH w-cardInnerW rounded-lg bg-redMid border-4 border-redDark text-center justify-center"

// TYPOGRAPHY
const inactiveH1 = "pb-10 font-semibold text-5xl text-redDark uppercase"
const inactiveH3 = "pt-10 font-semibold text-2xl text-redDark uppercase"
const selectButton = "font-semibold text-2xl text-redDark hover:text-redLight focus:outline-none"

//SEQUENCE
const drawTitle = ['First', 'Second', 'Third']
const drawTheme = ['Overview', 'Challenge', 'Action']

function PanelInactive({ adjustStatus, drawNum }) {
  return (
    <div className={redPanel}>
      <h3 className={inactiveH3}>{`THE ${drawTitle[drawNum]} RUNE`}</h3>
      <h1 className={inactiveH1}>{`THE ${drawTheme[drawNum]}`}</h1>
      <button onClick={() => adjustStatus("up")} className={selectButton}>
        SELECT
      </button>
    </div>
  )
}

export default PanelInactive
