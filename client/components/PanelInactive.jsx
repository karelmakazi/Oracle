import React from "react"

import VectorFrame from './VectorFrame'

// LAYOUT
const redPanel =
  "flex flex-col h-cardInnerH w-cardInnerW rounded-lg bg-redMid border-4 border-redDark text-center justify-center"

// TYPOGRAPHY
const inactiveH1 = "pb-10 font-semibold text-5xl text-redDark"
const inactiveH3 = "pt-10 font-semibold text-2xl text-redDark"
const selectButton = "font-semibold text-2xl text-redDark hover:text-redLight"

function PanelInactive({ adjustStatus }) {
  return (
    <div className={redPanel}>
    <VectorFrame svg={"M80.454 24.841L54.922 47.913v40.341h-9.8V47.913L19.546 24.841l6.592-7.251 18.984 17.139V11.746h9.8v22.983L73.906 17.59l6.548 7.251z"}/>
      <h3 className={inactiveH3}>RUNE ONE</h3>
      <h1 className={inactiveH1}>THE OVERVIEW</h1>
      <button onClick={() => adjustStatus("up")} className={selectButton}>
        SELECT
      </button>
    </div>
  )
}

export default PanelInactive
