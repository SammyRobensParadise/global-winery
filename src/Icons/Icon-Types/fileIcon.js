import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  transform: scale(0.55) translateY(0px);
`
const FileIcon = ({ color }) => {
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 36.14 34.75'
        tabIndex='-1'
      >
        <title>fileIcon</title>
        <rect fill={color} x='21.66' y='13.45' width='8.85' height='0.6' />
        <rect fill={color} x='5.49' y='26.65' width='25.02' height='0.6' />
        <path fill={color} d='M0,.46v33.6H36V.46Zm35.4,33H.6V1.06H35.4Z' />
        <rect fill={color} x='21.66' y='6.85' width='8.85' height='0.6' />
        <rect fill={color} x='5.49' y='20.05' width='25.02' height='0.6' />
        <path
          fill={color}
          d='M17.34,6.85H5.49v7.2H17.34Zm-.6,6.6H6.09v-6H16.74Z'
        />
      </svg>
    </Styling>
  )
}

FileIcon.propTypes = {
  color: PropTypes.string
}
export default FileIcon
