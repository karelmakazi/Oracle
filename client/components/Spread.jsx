import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Draw from './Draw'

const cardPanel = 'h-72 w-40 bg-white'

function Spread() {
  const [draw1, setDraw1] = useState({ runeID: '', orientation: '' })
  const [draw2, setDraw2] = useState({ runeID: '', orientation: '' })
  const [draw3, setDraw3] = useState({ runeID: '', orientation: '' })

  return (
    <div className={cardPanel}>
      <Draw />
    </div>
  )
}

export default Spread
