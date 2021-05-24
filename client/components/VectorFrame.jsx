import React from 'react'


function VectorFrame ( {svg, svgStyle} ) {
  return(
    <div>
      <svg className={svgStyle} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
      <path d={svg} fillRule="nonzero"/></svg>
    </div>
  )
}

export default VectorFrame