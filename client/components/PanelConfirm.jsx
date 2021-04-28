import React, { useState } from "react"

const selectPanel =
  'flex flex-col h-cardInnerH w-cardInnerW rounded-lg border-4 border-redDark text-center justify-center'

function PanelConfirm(props) {
  const [aspect, setAspect] = useState(false)
  const { selected, lockHandler, adjustStatus } = props

  function orientationHandler() {
    setAspect(!aspect)
    console.log(aspect);
  }

  return (
    <div className={selectPanel}>
      <h1>{selected.image}</h1>
      {selected.reversible && (
        <button onClick={orientationHandler}>CHANGE ASPECT</button>
      )}
      <button onClick={() => lockHandler(selected.rune, aspect)}>
        LOCK IN RUNE
      </button>
      <button onClick={() => adjustStatus("down")}>CLEAR</button>
    </div>
  )
}

export default PanelConfirm
