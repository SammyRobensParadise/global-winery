import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  transform: scale(0.7);
`
const CodepenIcon = ({ color }) => {
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 22.49 22.49'
        tabIndex='0'
      >
        <title>codepenIcon</title>
        <path
          fill={color}
          id='Icon_metro-codepen'
          data-name='Icon metro-codepen'
          d='M22.16,7.12l-10.5-7a.78.78,0,0,0-.83,0l-10.5,7A.77.77,0,0,0,0,7.75v7a.75.75,0,0,0,.34.62l10.5,7a.74.74,0,0,0,.83,0l10.5-7a.74.74,0,0,0,.33-.62v-7A.76.76,0,0,0,22.16,7.12ZM11.25,13.85l-3.9-2.6,3.9-2.6,3.9,2.6ZM12,7.35V2.15l8.4,5.6-3.9,2.6Zm-1.5,0-4.5,3L2.1,7.75l8.4-5.6Zm-5.85,3.9L1.5,13.35V9.15Zm1.35.9,4.5,3v5.19l-8.4-5.6Zm6,3,4.5-3,3.9,2.6L12,20.35Zm5.85-3.9L21,9.15v4.2Z'
        />
      </svg>
    </Styling>
  )
}

CodepenIcon.propTypes = {
  color: PropTypes.string
}
export default CodepenIcon
