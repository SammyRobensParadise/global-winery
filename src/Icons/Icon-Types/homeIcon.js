import React from 'react'
import PropTypes from 'prop-types'

const HomeIcon = ({ color }) => {
  HomeIcon.propTypes = {
    color: PropTypes.string
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='53'
      viewBox='0 0 40 53'
      tabIndex='1'
    >
      <text
        id='home001_-_E031'
        data-name='home001 - E031'
        transform='translate(20 51)'
        fill='none'
        stroke={color}
        strokeWidth='1'
        fontSize='25'
        fontFamily='IkonoMiniF-1, Ikono Mini F'
      >
        <tspan x='-18.275' y='0'>
          
        </tspan>
      </text>
    </svg>
  )
}

export default HomeIcon
