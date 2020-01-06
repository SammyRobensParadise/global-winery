import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  transform: scale(0.6) translateY(-5px);
`
const textboxIcon = ({ color }) => {
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 19.16 21.9'
        tabIndex='0'
      >
        <title>textboxIcon</title>
        <path
          id='Icon_metro-file-text'
          data-name='Icon metro-file-text'
          fill={color}
          d='M18.26,4.9A18.92,18.92,0,0,0,16.4,2.77,18.88,18.88,0,0,0,14.27.9,3.49,3.49,0,0,0,12.32,0H1.71A1.72,1.72,0,0,0,0,1.71V20.19A1.71,1.71,0,0,0,1.71,21.9H17.45a1.7,1.7,0,0,0,1.71-1.71V6.84a3.33,3.33,0,0,0-.9-1.94ZM15.43,3.74A17.18,17.18,0,0,1,17,5.48H13.69V2.18A18.29,18.29,0,0,1,15.43,3.74Zm2.36,16.45a.34.34,0,0,1-.34.34H1.71a.34.34,0,0,1-.34-.34V1.71a.34.34,0,0,1,.34-.34H12.32V6.16a.68.68,0,0,0,.68.68h4.8Zm-3.42-2.4H4.79a.69.69,0,0,1,0-1.37h9.58a.69.69,0,1,1,0,1.37Zm0-2.74H4.79a.67.67,0,0,1-.68-.68.68.68,0,0,1,.68-.69h9.58a.69.69,0,0,1,.69.69A.68.68,0,0,1,14.37,15.05Zm0-2.73H4.79a.68.68,0,0,1-.68-.69A.67.67,0,0,1,4.79,11h9.58a.68.68,0,0,1,.69.68A.7.7,0,0,1,14.37,12.32Z'
        />
      </svg>
    </Styling>
  )
}

textboxIcon.propTypes = {
  color: PropTypes.string
}
export default textboxIcon
