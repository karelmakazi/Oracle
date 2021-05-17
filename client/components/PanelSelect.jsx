import React from "react"

const whitePanel =
  "flex flex-col h-cardInnerH w-cardInnerW rounded-lg border-4 border-redDark text-center justify-center"
const selectH1 = "pb-10 font-semibold text-3xl text-redDark"
const selectH3 = "pt-10 font-semibold text-2xl text-redDark"

function PanelSelect({ runeData, selectHandler }) {
  return (
    <div className={whitePanel}>
      <h3 className={selectH1}>SELECT YOUR RUNE</h3>
      <div>
        {runeData.runes.map((rune, key) => {
          return (
            <button
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
            >
              {rune.image}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default PanelSelect
