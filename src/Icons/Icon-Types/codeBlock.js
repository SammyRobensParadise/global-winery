import React from 'react'
import PropTypes from 'prop-types'

const CodeBlock = ({ color }) => {
  CodeBlock.propTypes = {
    color: PropTypes.string
  }
  return (
    <svg width='28' height='41'>
      <text
        data-name='code001 - E0C5'
        transform='translate(14 40)'
        fontSize='20'
        fontFamily='IkonoMiniL-2, Ikono Mini L'
        fill={color}
      >
        <tspan x='-13.31' y='0'>
          
        </tspan>
      </text>
    </svg>
  )
}

export default CodeBlock
