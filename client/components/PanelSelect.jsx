import React from "react"

import VectorFrame from './VectorFrame'

const whitePanel =
  "flex flex-col h-cardInnerH w-cardInnerW rounded-lg border-4 border-redDark text-center justify-center"
const runePanel = "px-6 flex flex-row flex-wrap gap-2 justify-center"
const selectH1 = "pb-5 font-semibold text-4xl text-redDark"
const svgStyle = 'fill-current text-redMid hover:text-redDark transition duration-200 ease-out'


function PanelSelect({ runeData, selectHandler }) {
  return (
    <div className={whitePanel}>
      <h1 className={selectH1}>SELECT YOUR RUNE</h1>
      <div className={runePanel}>
        {runeData.runes.map((rune, key) => {
          return (
           <div className={'w-14 h-14'} key={rune.id} 
              onClick={() => selectHandler( rune.id, rune.name, rune.image, rune.reversible, rune.meaning) }>
              <VectorFrame svg={rune.image} svgStyle={svgStyle}/>
          </div>
          )
        })}
      </div>  
    </div>
  )
}

export default PanelSelect


{/* <button
              key={key}
              className={'rune-font  text-redDark'}
              onClick={() =>
                selectHandler(
                  rune.id,
                  rune.image,
                  rune.reversible,
                  rune.meaning
                )
              }
            > */}