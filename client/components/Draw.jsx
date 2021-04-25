import React, { useState } from 'react'

import runeData from '../../server/data/runes'

console.log(runeData)

function Draw() {
  const [status, setStatus] = useState(0)
  const [draw, setDraw] = useState({ runeID: '', runeOrientation: '' })

  function clickHandler() {
    setStatus(status + 1)
  }

  return (
    <>
    {/* // Status: 0 - NO SELECTION DISPLAY SHOWN */}
      {status === 0 && (
        <div>
          <h3>RUNE ONE</h3>
          <h1>THE OVERVIEW</h1>
          <button onClick={clickHandler}>SELECT</button>
        </div>
      )}

    {/* Status: 1 - SELECTION DISPLAY SHOWN */}
       {status === 1 && (
         <div>
           <h1>IS IT ME YOURE LOOKING FOR</h1>
         </div>
       )} 
    </>


    //status: selected - ORIENTATION & LOCK SCREEN SHOWN

    //status: locked - RUNE DETAIL SHOWN
  )
}

export default Draw
