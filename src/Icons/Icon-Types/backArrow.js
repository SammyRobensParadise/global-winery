import React from 'react'
import PropTypes from 'prop-types'

const BackArrow = ({ color }) => {
  BackArrow.propTypes = {
    color: PropTypes.string
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      tabIndex='1'
      width='34'
      height='48'
      viewBox='0 0 34 57'
    >
      <text
        id='right004_-_E04C'
        data-name='right004 - E04C'
        transform='matrix(-1, 0, 0, 1, 17, 55)'
        stroke={color}
        strokeWidth='1'
        fontSize='27'
        fontFamily='IkonoMiniL-1, Ikono Mini L'
      >
        <tspan x='-15.039' y='0'>
          
        </tspan>
      </text>
    </svg>
  )
}

export default BackArrow