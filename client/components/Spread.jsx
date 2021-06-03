import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import Draw from "./Draw"

const drawsPanel = "flex flex-col md:flex-row gap-4 overflow-y-scroll"
const cardPanel = "h-cardH w-cardW p-2.5 rounded-lg bg-white shadow-xl"
const spreadPanel = "flex flex-col items-center"
const saveH1 =
  "pt-5 font-semibold text-4xl text-white hover:text-redMid select-none cursor-pointer"

function spreadCompiler() {
  const compiledSpread = {
    runeOne: draw1.runeID,
    runeTwo: draw2.runeID,
    runeThree: draw3.runeID,
    runeOneReversed: draw1.runeReversed,
    runeTwoReversed: draw2.runeReversed,
    runeThreeReversed: draw3.runeReversed,
  }
  return compiledSpread
}

function Spread() {
  const [draw1, setDraw1] = useState({ runeID: "", runeReversed: "" })
  const [draw2, setDraw2] = useState({ runeID: "", runeReversed: "" })
  const [draw3, setDraw3] = useState({ runeID: "", runeReversed: "" })

  //TO DB WHEN SAVE IS DISPLAYED

  return (
    <div className={spreadPanel}>
      <div className={drawsPanel}>
        <div className={cardPanel}>
          <Draw drawNum={0} updateDraw={setDraw1} />
        </div>
        <div className={cardPanel}>
          <Draw drawNum={1} updateDraw={setDraw2} />
        </div>
        <div className={cardPanel}>
          <Draw drawNum={2} updateDraw={setDraw3} />
        </div>
      </div>
      {draw3.runeID && (
        <h1 className={saveH1} onClick={spreadCompiler}>
          SAVE YOUR SPREAD
        </h1>
      )}
    </div>
  )
}

export default Spread
