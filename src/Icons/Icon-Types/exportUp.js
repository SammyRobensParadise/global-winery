import React from 'react'
import PropTypes from 'prop-types'

const exportUp = ({ color }) => {
  exportUp.propTypes = {
    color: PropTypes.string
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      tabIndex='1'
      width='20'
      height='41'
      viewBox='0 0 20 41'
    >
      <text
        id='share001_-_E027'
        data-name='share001 - E027'
        transform='translate(10 40)'
        fill={color}
        fontSize='20'
        fontFamily='IkonoMiniL-2, Ikono Mini L'
      >
        <tspan x='-9.62' y='0'>
          
        </tspan>
      </text>
    </svg>
  )
}

export default exportUp
