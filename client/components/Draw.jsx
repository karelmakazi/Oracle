import React, { useState, useEffect } from 'react'
import runeData from '../../server/data/runes'
import PanelConfirm from './PanelConfirm'
import PanelInactive from './PanelInactive'
import PanelSelect from './PanelSelect'
import PanelLocked from './PanelLocked'

// LAYOUT STYLING
const cardSecondPanel =
  'flex flex-col h-cardInnerH w-cardInnerW rounded-lg border-4 border-redDark text-center justify-center'

// TYPOGRAPHY STYLING
const cardH1 = 'pb-10 font-semibold text-5xl text-redDark'
const cardH3 = 'pt-10 font-semibold text-2xl text-redDark'
const selectButton = 'font-semibold text-2xl text-redDark hover:text-redLight'

function Draw() {
  const [status, setStatus] = useState(0)
  const [aspect, setAspect] = useState(false)
  const [draw, setDraw] = useState({ runeID: '', runeReversed: '' })
  const [selected, setSelected] = useState({
    rune: null,
    image: null,
    reversible: null,
    meaning: null
  })

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

  function selectHandler(rune, image, reversible, meaning) {
    setSelected({ rune, image, reversible, meaning })
    adjustStatus('up')
  }

  function lockHandler(rune, orientation) {
    setDraw({
      runeID: rune,
      runeReversed: orientation,
    })
    adjustStatus('up')
  }

  function runeMeaning() {
    const meaning = runeData.runes.filter((rune) => {
      return rune.id === selected.rune
    })
    console.log(meaning);
  }

  return (
    <>
      {/* // Status: 0 - NO SELECTION DISPLAY SHOWN */}
      {status === 0 && <PanelInactive adjustStatus={adjustStatus} />}

      {/* Status: 1 - SELECTION DISPLAY SHOWN */}
      {status === 1 && (
        <PanelSelect runeData={runeData} selectHandler={selectHandler} />
      )}

      {/* Status: 2 - ORIENTATION & LOCKSCREEN SHOWN */}
      {status === 2 && (
        <PanelConfirm
          selected={selected}
          orientationHandler={orientationHandler}
          lockHandler={lockHandler}
          adjustStatus={adjustStatus}
        />
      )}

      {/* Status: 3 - MEANING DISPLAYED */}
      {status === 3 && (
        <PanelLocked 
          selected={selected}
          orientation={draw.runeReversed}
        />
      )}
    </>
  )
}

export default Draw
