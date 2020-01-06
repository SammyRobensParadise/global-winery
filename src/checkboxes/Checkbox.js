import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CheckedOne = styled.div`
  width: 40px;
  height: 7px;
  background: #2ebf91;
  transform: rotate(-45deg);
  &:focus {
    outline: none;
  }
`
const CheckedTwo = styled.div`
  width: 20px;
  height: 7px;
  background: #2ebf91;
  transform: translateX(-7px) translateY(-0px) rotate(45deg);
  &:focus {
    outline: none;
  }
`
const CheckedWrapper = styled.div`
  transform: translateX(8px) translateY(4px);
  &:focus {
    outline: none;
  }
`
const Box = styled.div`
  width: 30px;
  height: 30px;
  border: solid ${p => p.borderColor} 3px;
  &:hover {
    cursor: pointer;
    background: #f5f5f5;
  }
  &:focus {
    outline: none;
  }
`
const CheckMark = ({ checked }) => {
  CheckMark.propTypes = {
    checked: PropTypes.bool
  }
  return checked ? (
    <CheckedWrapper>
      <CheckedOne />
      <CheckedTwo />
    </CheckedWrapper>
  ) : (
    <div />
  )
}

const CLASSNAME = 'check-box'
const CheckBox = ({ checked, borderColor, event }) => {
  CheckBox.propTypes = {
    checked: PropTypes.bool,
    borderColor: PropTypes.string,
    event: PropTypes.func
  }
  return (
    <div className={CLASSNAME}>
      <Box borderColor={borderColor} onClick={event} onKeyDown={event} tabIndex='0'>
        <CheckMark checked={checked} />
      </Box>
    </div>
  )
}

export default CheckBox
