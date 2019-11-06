import React from 'react'
import PropTypes from 'prop-types'

const RefreshArrow = ({ color }) => {
  RefreshArrow.propTypes = {
    color: PropTypes.string
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      tabIndex='1'
      width='24'
      height='41'
      viewBox='0 0 24 41'
    >
      <text
        id='left094_-_E64C'
        data-name='left094 - E64C'
        transform='translate(12 39)'
        stroke={color}
        strokeWidth='1'
        fontSize='19'
        fontFamily='IkonoMiniL-1, Ikono Mini L'
      >
        <tspan x='-10.64' y='0'>
          
        </tspan>
      </text>
    </svg>
  )
}

export default RefreshArrow
