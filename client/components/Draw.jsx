import React, { useState } from 'react'
import runeData from '../../server/data/runes'


// STYLING 


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
        <div>
          <h3>RUNE ONE</h3>
          <h1>THE OVERVIEW</h1>
          <button onClick={() => adjustStatus('up')}>
            SELECT
          </button>
        </div>
      )}

      {/* Status: 1 - SELECTION DISPLAY SHOWN */}
      {status === 1 && (
        <div>
          <h3>SELECT YOUR RUNE</h3>
          {runeData.runes.map((rune) => {
            return (
              <button onClick={() =>
                selectHandler(rune.id, rune.image, rune.reversible)}>
                {rune.image}
              </button>
            )
          })}
        </div>
      )}

      {/* Status: 2 - ORIENTATION & LOCKSCREEN SHOWN */}
      {status === 2 && (
        <div>
          <h1>{selected.image}</h1>
          {selected.reversible && (
            <button onClick={orientationHandler}>
              CHANGE ASPECT
            </button>
          )}
          <button onClick={() => lockHandler(selected.rune, aspect)}>
            LOCK IN RUNE
          </button>
          <button onClick={() => adjustStatus('down')}>
            CLEAR
          </button>
        </div>
      )}
    </>
  )
}

export default Draw
