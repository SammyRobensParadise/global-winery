import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputWrapperNotScrollable = styled.textarea`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  border-radius: 10px;
  background: #ebebeb;
  border-width: 1px;
  border-style: solid;
  border-color: #d3d3d3;
  font-size: 20px;
  padding-left: 20px;
  white-space: normal;
`
const GetTextArea = ({ type, size, width, height }) => {
  GetTextArea.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }
  return (
    <InputWrapperNotScrollable
      type={type}
      size={size}
      width={width}
      height={height}
    />
  )
}
const CLASSNAME = 'single-input'
const FixedInput = ({ type, size, width, height }) => {
  FixedInput.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }
  return (
    <div className={CLASSNAME}>
      <GetTextArea type={type} size={size} width={width} height={height} />
    </div>
  )
}

export default FixedInput
