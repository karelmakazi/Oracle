import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Draw from './Draw'

const drawsPanel = 'flex flex-col md:flex-row gap-4 overflow-y-scroll'
const cardPanel = 'h-cardH w-cardW p-2.5 rounded-lg bg-white shadow-xl'

function Spread() {
  const [draw1, setDraw1] = useState({ runeID: '', orientation: '' })
  const [draw2, setDraw2] = useState({ runeID: '', orientation: '' })
  const [draw3, setDraw3] = useState({ runeID: '', orientation: '' })

  return (
    <div className={drawsPanel}>
    <div className={cardPanel}>
      <Draw drawNum={0} updateDraw={setDraw1} />
    </div>
    <div className={cardPanel}>
      <Draw drawNum={1} updateDraw={setDraw2}/>
    </div>
    <div className={cardPanel}>
      <Draw drawNum={2} updateDraw={setDraw3}/>
    </div>
    </div>
  )
}

export default Spread
