import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButttonEl = styled.div`
  background-color: ${p => (p.invert ? '#fff' : '#2ebf91')};
  width: ${p => (p.small ? '148px' : '300px')};
  color: ${p => (p.invert ? '#2ebf91' : '#fff')};
  text-align: center;
  height: 58px;
  border-radius: 20px;
  border-width: 3px;
  border-style: solid;
  border-color: #2ebf91;
  box-shadow: ${p =>
    p.dropShadow ? '0px 16px 40px -7px rgba(153,153,153,1)' : 'none'};
  &:hover {
    cursor: pointer;
    background-color: ${p =>
    p.hover && p.invert ? '#2ebf91' : p.hover ? '#fff' : '#2ebf91'};
    color: ${p =>
    p.hover && p.invert ? '#fff' : p.hover ? '#2ebf91' : '#2ebf91'};
  }
`

const ButtonText = styled.div`
font-family: 'Montserrat', sans-serif;
font-weight: 200;
font-size 18px;
color: inherit;
height: 58px;
padding-top: 18px;

`
const BUTTON_CLASSNAME = 'button-wrapper'
const Button = ({ text, hover, invert, small, dropShadow, event }) => {
  Button.propTypes = {
    text: PropTypes.string,
    hover: PropTypes.bool,
    invert: PropTypes.bool,
    small: PropTypes.bool,
    dropShadow: PropTypes.bool,
    event: PropTypes.func
  }
  return (
    <div className={BUTTON_CLASSNAME}>
      <ButttonEl
        dropShadow={dropShadow}
        small={small}
        onClick={event}
        hover={hover}
        invert={invert}
      >
        <ButtonText invert={invert} hover={hover}>
          {text}
        </ButtonText>
      </ButttonEl>
    </div>
  )
}

export default Button
