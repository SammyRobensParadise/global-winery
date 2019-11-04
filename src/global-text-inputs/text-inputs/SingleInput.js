import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputWrapperScrollable = styled.textarea`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  width: 615px;
  height: 40px;
  border-radius: 10px;
  background: #ebebeb;
  border-width: 1px;
  border-style: solid;
  border-color: #d3d3d3;
  font-size: 20px;
  padding-left: 20px;
  padding-top: 20px;
  white-space: nowrap;
`
const InputWrapperNotScrollable = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  width: 615px;
  height: 60px;
  border-radius: 10px;
  background: #ebebeb;
  border-width: 1px;
  border-style: solid;
  border-color: #d3d3d3;
  font-size: 20px;
  padding-left: 20px;
`
const GetTextArea = ({ type, size, scrollAndResize }) => {
  GetTextArea.propTypes = {
    type: PropTypes.string,
    size: PropTypes.number,
    scrollAndResize: PropTypes.bool
  }
  return scrollAndResize ? (
    <InputWrapperScrollable type={type} size={size} />
  ) : (
    <InputWrapperNotScrollable type={type} size={size} />
  )
}
const CLASSNAME = 'single-input'
const SingleInput = ({ type, size, scrollAndResize }) => {
  SingleInput.propTypes = {
    type: PropTypes.string,
    size: PropTypes.number,
    scrollAndResize: PropTypes.bool
  }
  return (
    <div className={CLASSNAME}>
      <GetTextArea type={type} size={size} scrollAndResize={scrollAndResize} />
    </div>
  )
}

export default SingleInput
