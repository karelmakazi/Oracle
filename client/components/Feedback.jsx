import React from 'react'
import {Link} from 'react-router-dom'

const Feedback = props => {
  const feedbackSource = props.match.params.source
  console.log('REQPARAMS:', feedbackSource)


  return (
    <div className=''>
      <h1>Your {feedbackSource} has been saved.</h1>
      <Link to={'/'}>HOME</Link>
    </div>
  )
}

export default Feedback