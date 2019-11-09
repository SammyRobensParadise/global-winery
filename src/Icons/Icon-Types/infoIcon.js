import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styles = styled.div`
  padding-top: 0px;
  transform: scale(0.6);
`
const InfoIcon = ({ color }) => {
  return (
    <Styles>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16.67 16.67'
        tabIndex='-1'
      >
        <title>infoIcon</title>
        <path
          fill={color}
          id='Icon_material-info-outline'
          data-name='Icon material-info-outline'
          d='M7.5,12.5H9.17v-5H7.5ZM8.33,0a8.34,8.34,0,1,0,8.34,8.33A8.33,8.33,0,0,0,8.33,0Zm0,15A6.67,6.67,0,1,1,15,8.33h0A6.67,6.67,0,0,1,8.33,15ZM7.5,5.83H9.17V4.17H7.5Z'
        />
      </svg>
    </Styles>
  )
}

InfoIcon.propTypes = {
  color: PropTypes.string
}

export default InfoIcon
