import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styles = styled.div`
  padding-top: 4px;
  transform: scale(0.8);
`
const BackArrow = ({ color }) => {
  BackArrow.propTypes = {
    color: PropTypes.string
  }
  return (
    <Styles>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 34 28.31'
        tabIndex='0'
      >
        <title>backArrow</title>
        <polygon
          className='cls-1'
          fill={color}
          stroke={color}
          points='32.04 13.59 3 13.59 14.3 2.63 13.93 2.25 1.97 13.85 13.93 25.46 14.3 25.08 3 14.13 32.04 14.13 32.04 13.59'
        />
      </svg>
    </Styles>
  )
}

export default BackArrow
