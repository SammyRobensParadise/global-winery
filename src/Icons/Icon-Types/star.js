import React from 'react'
import PropTypes from 'prop-types'

const Star = ({ color }) => {
  Star.propTypes = {
    color: PropTypes.string
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='34'
      height='48'
      viewBox='0 0 28 41'
      tabIndex='1'
    >
      <text
        id='star001_-_E01E'
        data-name='star001 - E01E'
        transform='translate(14 40)'
        fill={color}
        fontSize='20'
        fontFamily='IkonoMiniL-2, Ikono Mini L'
      >
        <tspan x='-13.58' y='0'>
          
        </tspan>
      </text>
    </svg>
  )
}

export default Star
