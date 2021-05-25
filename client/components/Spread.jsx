import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Draw from './Draw'

const cardPanel = 'h-cardH w-cardW p-2.5 rounded-lg bg-white shadow-xl'

function Spread() {
  const [draw1, setDraw1] = useState({ runeID: '', orientation: '' })
  const [draw2, setDraw2] = useState({ runeID: '', orientation: '' })
  const [draw3, setDraw3] = useState({ runeID: '', orientation: '' })

  return (
    <>
    <div className={cardPanel}>
      <Draw />
    </div>
    <div className={cardPanel}>
      <Draw />
    </div>
    <div className={cardPanel}>
      <Draw />
    </div>
    </>
  )
}

export default Spread
