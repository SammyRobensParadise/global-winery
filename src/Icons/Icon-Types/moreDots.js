import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styles = styled.div`
  transform: scale(0.8);
  padding-top: 10px;
`
const MoreDots = ({ color }) => {
  MoreDots.propTypes = {
    color: PropTypes.string
  }
  return (
    <Styles>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 34 34'
        tabIndex='0'
      >
        <title>moreDots</title>
        <circle cx='3.5' cy='4.65' r='3' fill={color} />
        <path fill={color} d='M17,1.65a3,3,0,1,0,3,3A3,3,0,0,0,17,1.65Z' />
        <path fill={color} d='M30.5,1.65a3,3,0,1,0,3,3A3,3,0,0,0,30.5,1.65Z' />
      </svg>
    </Styles>
  )
}

export default MoreDots
