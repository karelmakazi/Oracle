import React from 'react'


function VectorFrame ( {svg, svgStyle} ) {
  return(
    <svg className={svgStyle} viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path 
    d={svg}
    fillRule="nonzero"/></svg>
  )
}

export default VectorFrame