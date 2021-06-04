import React, { useState } from "react"
import VectorFrame from "./VectorFrame"

const selectPanel =
  "flex flex-col h-cardInnerH w-cardInnerW rounded-lg border-4 border-redDark text-center justify-center"
const runeName = "pb-3 font-semibold text-5xl text-redDark uppercase"
const runeOptions = "font-semibold text-xl uppercase text-redMid hover:text-redDark focus:outline-none transition duration-200 ease-out"
const svgStyle = "fill-current text-redDark"


function PanelConfirm(props) {
  const [rotation, setRotation] =useState('0')
  const [aspect, setAspect] = useState(false)
  const { selected, lockHandler, adjustStatus } = props

  function orientationHandler() {
    const svgRotation = (rotation === '0') ? '180' : '0'
    setRotation(svgRotation)
    setAspect(!aspect)
  }

  return (
    <div className={selectPanel}>
      <div className={`transform rotate-${rotation}`}>
        <VectorFrame svg={selected.image} svgStyle={svgStyle} />
      </div>
      <h3 className={runeName}>{selected.name}</h3>
      {selected.reversible && (
        <button className={runeOptions} onClick={orientationHandler}>CHANGE ASPECT</button>
      )}
      <button className={runeOptions} onClick={() => lockHandler(selected.rune, aspect)}>
        LOCK IN RUNE
      </button>
      <button className={runeOptions} onClick={() => adjustStatus("down")}>CLEAR</button>
    </div>
  )
}

export default PanelConfirm
