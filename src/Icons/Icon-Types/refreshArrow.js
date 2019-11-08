import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  margin-top: 4px;
  margin-left: 9px;
  transform: scale(0.8);
`
const RefreshArrow = ({ color }) => {
  RefreshArrow.propTypes = {
    color: PropTypes.string
  }
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='4 5 23 33'
        tabIndex='-1'
      >
        <title>refreshArrow</title>
        <g id='left094_-_E64C' data-name='left094 - E64C' className='cls-1'>
          <g className='cls-1' stroke={color} fill={color}>
            <path
              className='cls-2'
              d='M4.74,29.75A10.31,10.31,0,0,0,16,32a10.24,10.24,0,0,0,3.27-2.2,10.35,10.35,0,0,0,2.2-3.27,10.35,10.35,0,0,0,0-8,10.94,10.94,0,0,0-2.2-3.27A10.52,10.52,0,0,0,16,13.05a10.24,10.24,0,0,0-4-.82H7.14l5.07,4.71-.27.29L6.38,12l5.56-5.16.27.28L7.14,11.85H12a10.64,10.64,0,0,1,4.14.84A10.84,10.84,0,0,1,19.52,15a11,11,0,0,1,2.28,3.38,10.71,10.71,0,0,1,.84,4.14,10.6,10.6,0,0,1-.84,4.14,10.69,10.69,0,0,1-5.66,5.66,10.62,10.62,0,0,1-8.28,0A10,10,0,0,1,4.48,30,10.29,10.29,0,0,1,2.2,26.63a10.6,10.6,0,0,1-.84-4.14h.38a10.19,10.19,0,0,0,.8,4A10.35,10.35,0,0,0,4.74,29.75Z'
            />
          </g>
        </g>
      </svg>
    </Styling>
  )
}

export default RefreshArrow
