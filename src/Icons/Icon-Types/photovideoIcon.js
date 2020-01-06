import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  transform: scale(0.7) translateY(3px);
`
const PhotovideoIcon = ({ color }) => {
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 26 21'
        tabIndex='0'
      >
        <title>photovideoIcon</title>
        <path
          fill={'none'}
          stroke={color}
          id='Icon_awesome-photo-video'
          data-name='Icon awesome-photo-video'
          className='cls-1'
          d='M24.25.5H6.75A1.25,1.25,0,0,0,5.5,1.75V5.5h6.25V3h7.5V15.5h5a1.25,1.25,0,0,0,1.25-1.25V1.75A1.25,1.25,0,0,0,24.25.5Zm-14.69,4a.35.35,0,0,1-.35.36H8a.35.35,0,0,1-.35-.36h0V3.35A.35.35,0,0,1,8,3H9.21a.35.35,0,0,1,.35.35h0Zm13.75,8.13A.35.35,0,0,1,23,13H21.79a.35.35,0,0,1-.35-.35V11.48a.35.35,0,0,1,.35-.36H23a.35.35,0,0,1,.35.36Zm0-4.06a.35.35,0,0,1-.35.35H21.79a.35.35,0,0,1-.35-.35V7.41a.35.35,0,0,1,.35-.35H23a.35.35,0,0,1,.35.35Zm0-4.07a.35.35,0,0,1-.35.36H21.79a.35.35,0,0,1-.35-.36V3.35A.35.35,0,0,1,21.79,3H23a.35.35,0,0,1,.35.35ZM16.75,6.75h-15A1.25,1.25,0,0,0,.5,8V19.25A1.25,1.25,0,0,0,1.75,20.5h15A1.25,1.25,0,0,0,18,19.25V8A1.25,1.25,0,0,0,16.75,6.75ZM4.25,9.25A1.25,1.25,0,1,1,3,10.5,1.25,1.25,0,0,1,4.25,9.25ZM15.5,18H3V16.75l2.5-2.5L6.75,15.5l5-5,3.75,3.75Z'
        />
      </svg>
    </Styling>
  )
}

PhotovideoIcon.propTypes = {
  color: PropTypes.string
}
export default PhotovideoIcon
