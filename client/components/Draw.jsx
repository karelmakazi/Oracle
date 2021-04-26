import React, { useState } from 'react'
import runeData from '../../server/data/runes'

// LAYOUT STYLING
const cardFirstPanel =
  'flex flex-col h-cardInnerH w-cardInnerW rounded-lg bg-redMid border-4 border-redDark text-center justify-center'
const cardSecondPanel =
  'flex flex-col h-cardInnerH w-cardInnerW rounded-lg border-4 border-redDark text-center justify-center'



// TYPOGRAPHY STYLING
const cardH1 = 'pb-10 font-semibold text-5xl text-redDark'
const cardH3 = 'pt-10 font-semibold text-2xl text-redDark'
const selectButton = 'font-semibold text-2xl text-redDark hover:text-redLight'

function Draw() {
  const [status, setStatus] = useState(0)
  const [selected, setSelected] = useState({
    rune: null,
    image: null,
    reversible: null,
  })
  const [aspect, setAspect] = useState(false)
  const [draw, setDraw] = useState({ runeID: '', runeOrientation: '' })

  function orientationHandler() {
    setAspect(!aspect)
  }

  function adjustStatus(direction) {
    switch (direction) {
      case 'up':
        setStatus(status + 1)
        break
      case 'down':
        setStatus(status - 1)
        break
    }
  }

  function selectHandler(rune, image, reversible) {
    setSelected({ rune, image, reversible })
    adjustStatus('up')
  }

  function lockHandler(rune, orientation) {
    setDraw({
      runeID: rune,
      runeOrientation: orientation,
    })
    adjustStatus('up')
  }

  return (
    <>
      {/* // Status: 0 - NO SELECTION DISPLAY SHOWN */}
      {status === 0 && (
        <div className={cardFirstPanel}>
          <h3 className={cardH3}>RUNE ONE</h3>
          <h1 className={cardH1}>THE OVERVIEW</h1>
          <button onClick={() => adjustStatus('up')}
            className={selectButton}>
            SELECT
          </button>
        </div>
      )}

      {/* Status: 1 - SELECTION DISPLAY SHOWN */}
      {status === 1 && (
        <div className={cardSecondPanel}>
          <h3 className={cardH1}>SELECT YOUR RUNE</h3>
          <div>
            {runeData.runes.map((rune, key) => {
              return (
                <button
                  key={key}
                  onClick={() =>
                    selectHandler(rune.id, rune.image, rune.reversible)
                  }>
                  {rune.image}
                </button>
              )
            })} 
          </div>
        </div>
      )}

      {/* Status: 2 - ORIENTATION & LOCKSCREEN SHOWN */}
      {status === 2 && (
        <div>
          <h1>{selected.image}</h1>
          {selected.reversible && (
            <button onClick={orientationHandler}>CHANGE ASPECT</button>
          )}
          <button onClick={() => lockHandler(selected.rune, aspect)}>
            LOCK IN RUNE
          </button>
          <button onClick={() => adjustStatus('down')}>CLEAR</button>
        </div>
      )}
    </>
  )
}

export default Draw
