import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styles = styled.div`
  transform: scale(0.75);
`
const Star = ({ color }) => {
  Star.propTypes = {
    color: PropTypes.string
  }
  return (
    <Styles>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 28 26.74'
        tabIndex='-1'
      >
        <title>star</title>
        <path
          fill={color}
          d='M27.59,10.21H17.22L14,.32l-3.22,9.89H.42L8.8,16.33,5.6,26.21,14,20.09l8.42,6.12L19.2,16.33ZM21.21,24.53,14,19.29,6.82,24.53l2.74-8.44L2.38,10.85h8.88L14,2.41l2.74,8.44h8.89l-7.19,5.24Z'
        />
      </svg>
    </Styles>
  )
}

export default Star
