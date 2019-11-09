import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styles = styled.div`
  transform: scale(0.75) translateY(0px);
  padding-top: 6px;
`
const ProfileBadgeIcon = ({ color }) => {
  return (
    <Styles>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 50 36.22'
        tabIndex='-1'
      >
        <title>profileBadge</title>
        <path
          fill={color}
          d='M20.82,19.7a5.93,5.93,0,0,0,3.59-5.4,6,6,0,0,0-1.7-4.15,5.82,5.82,0,0,0-4.15-1.7,5.75,5.75,0,0,0-4.14,1.7,5.82,5.82,0,0,0-1.7,4.15,5.9,5.9,0,0,0,3.55,5.4,9.28,9.28,0,0,0-7.11,9.1H9.9a8.6,8.6,0,0,1,8.66-8.66,8.59,8.59,0,0,1,6.11,2.52,8.71,8.71,0,0,1,2.55,6.14H28a9.42,9.42,0,0,0-2.77-6.66A9.19,9.19,0,0,0,20.82,19.7Zm-7.36-5.4a5.05,5.05,0,0,1,5.1-5.11,5,5,0,0,1,3.59,1.48,5.1,5.1,0,1,1-8.69,3.63Z'
        />
        <rect fill={color} x='30.77' y='20.22' width='8.84' height='0.74' />
        <rect fill={color} x='30.77' y='13.93' width='12.65' height='0.74' />
        <path
          fill={color}
          d='M45,1.05H5A4.46,4.46,0,0,0,.58,5.49V30.65A4.46,4.46,0,0,0,5,35.09H45a4.46,4.46,0,0,0,4.44-4.44V5.49A4.46,4.46,0,0,0,45,1.05Zm3.7,29.6a3.7,3.7,0,0,1-3.7,3.7H5a3.71,3.71,0,0,1-3.7-3.7V5.49A3.72,3.72,0,0,1,5,1.79H45a3.71,3.71,0,0,1,3.7,3.7Z'
        />
      </svg>
    </Styles>
  )
}

ProfileBadgeIcon.propTypes = {
  color: PropTypes.string
}

export default ProfileBadgeIcon
