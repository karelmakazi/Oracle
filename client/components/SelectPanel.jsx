import React from 'react'

const SelectPanel = (props) => {
  let drawNumber = props.drawNumber - 1 
  const drawTitle = ['First', 'Second', 'Third']
  const drawTheme = ['Overview', 'Challenge', 'Action']

  return(
    <div className='selectPanel'>
      <h3>{`${drawTitle[drawNumber]} Draw`}</h3>
      <h1>{`The ${drawTheme[drawNumber]}`}</h1>
    </div>
  )
}

export default SelectPanel