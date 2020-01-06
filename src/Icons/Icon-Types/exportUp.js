import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styles = styled.div`
  transform: scale(0.58) translateY(-15px);
`
const exportUp = ({ color }) => {
  exportUp.propTypes = {
    color: PropTypes.string
  }
  return (
    <Styles>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 28'
        tabIndex='0'
      >
        <title>exportUp</title>
        <g
          id='share001_-_E027'
          data-name='share001 - E027'
          className='cls-1'
          fill={color}
          stroke={color}
        >
          <polygon
            fill={color}
            stroke={color}
            className='cls-2'
            points='12.18 9.13 12.18 9.77 18.98 9.77 18.98 26.73 1.02 26.73 1.02 9.77 7.82 9.77 7.82 9.13 0.38 9.13 0.38 27.37 19.62 27.37 19.62 9.13 12.18 9.13'
          />
          <polygon
            fill={color}
            stroke={color}
            className='cls-2'
            points='9.68 1.81 9.68 16.85 10.32 16.85 10.32 1.81 14.48 5.97 14.92 5.51 10 0.59 5.08 5.51 5.52 5.97 9.68 1.81'
          />
        </g>
      </svg>
    </Styles>
  )
}

export default exportUp
