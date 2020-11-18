import React from 'react'
import { runeMeaning } from '../lib'

const runeImageStyle = (name) =>
name === 'reversed' ? 'runeImage runeReversed' : 'runeImage'

const drawName = [ 'The Overview', 'The Challenge', 'The Action' ]

const SymbolDisplay = (props) => {

  let symbolData = props.symbolData
  let drawNumber = props.drawNumber

  return(
    <div className='infoPanel'>
            
      <div className="symbolDisplay">
        <div className={
          runeImageStyle(symbolData.selRuneAspect)}>
          {symbolData.selRuneImage}</div>
      </div>

      <div className="symbolInfo">
        <h3>{drawName[drawNumber]}</h3>
        <h1>{symbolData.selRuneName}</h1>
        <p>
          {runeMeaning(symbolData.selRuneName, 
              symbolData.selRuneAspect)}
        </p>
      </div>
            
    </div>
    
  )
}

export default SymbolDisplay