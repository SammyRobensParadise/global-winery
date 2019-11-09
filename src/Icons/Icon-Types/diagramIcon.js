import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  transform: scale(0.7);
`
const DiagramIcon = ({ color }) => {
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 19.85 19.85'
      >
        <title>diagramIcon</title>
        <path
          fill={color}
          id='Icon_awesome-draw-polygon'
          data-name='Icon awesome-draw-polygon'
          d='M17,14.18h0l-1.74-2.89a2.72,2.72,0,0,0,0-2.73L17,5.67h0a2.84,2.84,0,1,0-2.44-4.26H5.28A2.83,2.83,0,0,0,.38,4.24a2.88,2.88,0,0,0,1,1v9.29a2.82,2.82,0,1,0,3.86,3.86h9.29A2.83,2.83,0,1,0,17,14.18Zm-12.76.39V5.28a2.83,2.83,0,0,0,1-1h9.23l-1.7,2.84h-.05a2.84,2.84,0,0,0,0,5.67h.05l1.7,2.84H5.28a2.8,2.8,0,0,0-1-1Zm7.8-4.65a.71.71,0,1,1,.71.71h0a.71.71,0,0,1-.71-.71Zm5.67-7.09a.71.71,0,1,1-.71-.7h0a.71.71,0,0,1,.71.71ZM2.84,2.13a.71.71,0,1,1-.71.71A.7.7,0,0,1,2.84,2.13ZM2.13,17a.71.71,0,1,1,.71.71h0A.71.71,0,0,1,2.13,17ZM17,17.72a.71.71,0,1,1,.71-.71h0A.71.71,0,0,1,17,17.72Z'
        />
      </svg>
    </Styling>
  )
}

DiagramIcon.propTypes = {
  color: PropTypes.string
}
export default DiagramIcon
