import React from 'react'
import PropTypes from 'prop-types'

const MoreDots = ({ color }) => {
  MoreDots.propTypes = {
    color: PropTypes.string
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='34'
      height='48'
      viewBox='0 0 34 61'
      tabIndex='1'
    >
      <text
        id='dots005_-_E301'
        data-name='dots005 - E301'
        transform='translate(17 60)'
        fill={color}
        fontSize='30'
        fontFamily='IkonoMiniL-5, Ikono Mini L'
      >
        <tspan x='-16.5' y='0'>
          
        </tspan>
      </text>
    </svg>
  )
}

export default MoreDots
