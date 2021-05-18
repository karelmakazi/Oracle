import React from 'react'

const svgStyle = 'fill-current text-redDark hover:text-redLight'

function VectorFrame ( {svg} ) {
  return(
    <svg className={svgStyle} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path 
    d={svg}
    fillRule="nonzero"/></svg>
  )
}

export default VectorFrame