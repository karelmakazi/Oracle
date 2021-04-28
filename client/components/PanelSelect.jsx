import React from 'react'

const selectPanel =
  'flex flex-col h-cardInnerH w-cardInnerW rounded-lg border-4 border-redDark text-center justify-center'
const cardH1 = 'pb-10 font-semibold text-5xl text-redDark'
const cardH3 = 'pt-10 font-semibold text-2xl text-redDark'


function PanelSelect({runeData, selectHandler}) {

  return (
    <div className={selectPanel}>
          <h3 className={cardH1}>SELECT YOUR RUNE</h3>
          <div>
            {runeData.runes.map((rune, key) => {
              return (
                <button
                  key={key}
                  onClick={() =>
                    selectHandler(rune.id, rune.image, rune.reversible, rune.meaning)
                  }>
                  {rune.image}
                </button>
              )
            })} 
          </div>
        </div>
  )
}

export default PanelSelect