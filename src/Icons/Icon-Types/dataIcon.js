import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  transform: scale(0.65) translateY(-3px);
  padding-bottom: 8px;
`
const DataIcon = ({ color }) => {
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 40 39.14'
        tabIndex='-1'
      >
        <title>dataIcon</title>
        <polygon
          fill={color}
          points='38.48 17.17 38.48 37.21 29.69 37.21 29.69 1.51 29.09 1.51 29.09 37.21 20.3 37.21 20.3 12.46 19.7 12.46 19.7 37.21 10.91 37.21 10.91 26.56 10.31 26.56 10.31 37.21 1.52 37.21 1.52 21.85 0.92 21.85 0.92 37.81 39.08 37.81 39.08 17.17 38.48 17.17'
        />
      </svg>
    </Styling>
  )
}

DataIcon.propTypes = {
  color: PropTypes.string
}
export default DataIcon
