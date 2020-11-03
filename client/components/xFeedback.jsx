import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Feedback from './Feedback'

// import { render, screen } from '@testing-library/react'


describe('<Feedback />', ()=> {
  it('shows', () => {
    render(<Feedback feedbackSource='spread'/>)
    //See what screen outputs
    console.log(screen.debug());
    let heading = screen.getByRole('h1')
    expect(heading.innerHTML).toContain('string')
  })
  it('clicks'), ()=>{
    render(<Feedback feedbackSource='spread'/>)
    let button = screen.getByRole('button')
    fireEvent.click(button)
    let heading = screen.getByRole('heading')
    expect(heading.innerHTML).toEqual("")

  }
})

