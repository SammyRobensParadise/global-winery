import React from 'react'
import PropTypes from 'prop-types'

const ExitIcon = ({ color }) => {
  ExitIcon.propTypes = {
    color: PropTypes.string
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='34'
      height='48'
      viewBox='0 0 22 41'
      tabIndex='1'
    >
      <text
        id='x001_-_E0A9'
        data-name='x001 - E0A9'
        transform='translate(11 40)'
        fill={color}
        fontSize='20'
        fontFamily='IkonoMiniL-2, Ikono Mini L'
      >
        <tspan x='-10.23' y='0'>
          
        </tspan>
      </text>
    </svg>
  )
}

export default ExitIcon
