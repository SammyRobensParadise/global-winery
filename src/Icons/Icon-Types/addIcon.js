import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styles = styled.div`
  transform: scale(0.6);
  &:focus {
    outline: none;
  }
`
const AddIcon = ({ color }) => {
  AddIcon.propTypes = {
    color: PropTypes.string
  }
  return (
    <Styles>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 31 31.69'
        tabIndex='0'
      >
        <title>addIcon</title>
        <polygon
          fill={color}
          points='16.01 15.35 16.01 0.65 15.41 0.65 15.41 15.35 0.71 15.35 0.71 15.95 15.41 15.95 15.41 30.65 16.01 30.65 16.01 15.95 30.71 15.95 30.71 15.35 16.01 15.35'
        />
      </svg>
    </Styles>
  )
}

export default AddIcon
