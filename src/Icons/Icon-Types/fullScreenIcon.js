import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styles = styled.div`
  padding-top: 0px;
  transform: scale(0.6);
`
const FullScreenIcon = ({ color }) => {
  return (
    <Styles>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 22 21.87'
        tabIndex='0'
      >
        <title>fullScreenIcon</title>
        <polygon
          fill={color}
          points='17.32 10.47 17.72 10.47 17.72 4.19 11.42 4.19 11.42 4.59 17.04 4.59 10.42 11.21 10.7 11.49 17.32 4.87 17.32 10.47'
        />
        <polygon
          fill={color}
          points='0.8 0.71 0.8 10.91 1.2 10.91 1.2 1.11 20.8 1.11 20.8 20.72 11 20.72 11 21.12 21.2 21.12 21.2 0.71 0.8 0.71'
        />
        <path fill={color} d='M.8,21.12H9V12.89H.8Zm.4-7.83H8.62v7.43H1.2Z' />
      </svg>
    </Styles>
  )
}

FullScreenIcon.propTypes = {
  color: PropTypes.string
}

export default FullScreenIcon
