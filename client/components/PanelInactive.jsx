import React from "react"

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
      <h3 className={inactiveH3}>RUNE ONE</h3>
      <h1 className={inactiveH1}>THE OVERVIEW</h1>
      <button onClick={() => adjustStatus("up")} className={selectButton}>
        SELECT
      </button>
    </div>
  )
}

export default PanelInactive
