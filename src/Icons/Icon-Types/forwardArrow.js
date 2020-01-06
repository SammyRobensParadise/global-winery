import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styles = styled.div`
  transform: scale(0.78);
`
const ForwardArrow = ({ color }) => {
  ForwardArrow.propTypes = {
    color: PropTypes.string
  }
  return (
    <Styles>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 34 24.83'
        tabIndex='0'
      >
        <title>forwardArrow</title>
        <polygon
          fill={color}
          stroke={color}
          className='cls-1'
          points='20.07 1.21 19.7 1.58 31.01 12.54 1.96 12.54 1.96 13.08 31.01 13.08 19.7 24.04 20.07 24.42 32.03 12.81 20.07 1.21'
        />
      </svg>
    </Styles>
  )
}

export default ForwardArrow
