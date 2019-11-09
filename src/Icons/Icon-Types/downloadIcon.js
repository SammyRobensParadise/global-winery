import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  padding-top: 2px;
  transform: scale(0.7);
`
const DownloadIcon = ({ color }) => {
  DownloadIcon.propTypes = {
    color: PropTypes.string
  }
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 46 42.98'
        tabIndex='-1'
      >
        <title>downloadIcon</title>
        <polygon fill={color} points='23.48 40.51 23.48 20.68 22.52 20.68 22.52 40.51 17.24 35.23 16.58 35.92 23 42.34 29.45 35.92 28.79 35.23 23.48 40.51' />
        <path fill={color} d='M39.14,13.22a13.33,13.33,0,0,0,.21-2.11A10.52,10.52,0,0,0,28.82.59,10.64,10.64,0,0,0,20.24,5a7.42,7.42,0,0,0-4.83-1.8,7.25,7.25,0,0,0-6.93,9.68A9.39,9.39,0,0,0,9.77,31.54H18.2v-1H9.77a8.43,8.43,0,1,1,.12-16.85A6.9,6.9,0,0,1,9,10.48a6.39,6.39,0,0,1,6.39-6.35,6.67,6.67,0,0,1,5,2.34,9.59,9.59,0,0,1,18,4.64A9.67,9.67,0,0,1,38,13.87a8.45,8.45,0,0,1-1.71,16.71H27.8v1h8.46a9.39,9.39,0,0,0,2.88-18.32Z' />
      </svg>
    </Styling>
  )
}

export default DownloadIcon
