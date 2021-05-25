import React from 'react'
import VectorFrame from './VectorFrame'

const selectPanel =
  'flex flex-col h-cardInnerH w-cardInnerW rounded-lg border-4 border-redDark text-center justify-center'
const runeName = "pb-2 font-semibold text-2xl text-redDark uppercase"
const displayPanel = 'h-1/2 mx-6 border-b-2 border-redDark'
const meaningPanel = 
  'h-1/2 mt-2 mb-4 mr-2 px-6 overflow-y-scroll text-left text-redDark scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-redMid'
const svgStyle = 'fill-current text-redDark'

function PanelLocked ({selected, orientation}) {
  const aspect = orientation ? 'reversed' : 'normal'
  const rotation = (orientation === '0') ? '180' : '0'

  return(
    <div className={selectPanel}>
      <div className={displayPanel}>
        <div className={`h-60 w-60 m-auto transform rotate-${rotation}`}>
          <VectorFrame svg={selected.image} svgStyle={svgStyle} />
        </div>
      </div>
      {/* <div className={runeDisplay}>{selected.image}</div> */}
      <div className={meaningPanel}>
        <h3 className={runeName}>{selected.name} {aspect === 'reversed' && aspect}</h3>
        <p>{selected.meaning[aspect]}</p>
      </div>
    </div>

  )
}

export default PanelLocked