import React from 'react'
import { Link } from 'react-router-dom'
import { feedbackCompiler } from '../lib'

const Feedback = (props) => {

  const feedbackSource = props.match.params.source

  return (
    <div className=''>
      <h1>{feedbackCompiler(feedbackSource)}</h1>
      <Link to={'/'}>HOME</Link>
    </div>
  )
}

export default Feedback