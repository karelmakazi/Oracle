import React from 'react'

const Header = (props) => {

  const message = (props.navigation === 'spread')
    ? 'Enter your spread.'
    : 'Enter your reflection.'

  return(
    <div className=''>
      <h1> {message} </h1>
    </div>
  )
}

export default Header