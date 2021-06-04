import React, { useState} from "react"
// import { connect } from "react-redux"

import { addSpread } from '../api'

import Draw from "./Draw"

const drawsPanel = "flex flex-col md:flex-row gap-4 overflow-y-scroll"
const cardPanel = "h-cardH w-cardW p-2.5 rounded-lg bg-white shadow-xl"
const spreadPanel = "flex flex-col items-center"
const saveH1 =
  "pt-5 font-semibold text-4xl text-white hover:text-redMid select-none cursor-pointer transition duration-200 ease-out"

//Refactor to module  

function Spread() {
  const [draw1, setDraw1] = useState({ runeID: "", runeReversed: "" })
  const [draw2, setDraw2] = useState({ runeID: "", runeReversed: "" })
  const [draw3, setDraw3] = useState({ runeID: "", runeReversed: "" })
  
  function spreadToDB() {
    const compiledSpread = {
      pos1_rune: draw1.runeID,
      pos2_rune: draw2.runeID,
      pos3_rune: draw3.runeID,
      pos1_reversed: draw1.runeReversed,
      pos2_reversed: draw2.runeReversed,
      pos3_reversed: draw3.runeReversed,
    }
    addSpread(compiledSpread)
    // return compiledSpread
  }
  



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
        <h1 className={saveH1} onClick={spreadToDB}>
          SAVE YOUR SPREAD
        </h1>
      )}
    </div>
  )
}

export default Spread
