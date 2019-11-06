import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const up = 'UP'
const down = 'DOWN'
const left = 'LEFT'
const right = 'RIGHT'
const ChevWrapperRight = styled.div`
  width: 0;
  height: 0;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 23px solid ${p => p.color};
  &:hover {
    cursor: pointer;
  }
`
const ChevWrapperLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-right: 23px solid ${p => p.color};
  &:hover {
    cursor: pointer;
  }
`
const ChevWrapperUp = styled.div`
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 23px solid ${p => p.color};
  &:hover {
    cursor: pointer;
  }
`
const ChevWrapperDown = styled.div`
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 23px solid ${p => p.color};
  &:hover {
    cursor: pointer;
  }
`
const GetStyle = ({ direction, color }) => {
  switch (direction) {
    case up: {
      return <ChevWrapperUp color={color} />
    }
    case down: {
      return <ChevWrapperDown color={color} />
    }
    case left: {
      return <ChevWrapperLeft color={color} />
    }
    case right: {
      return <ChevWrapperRight color={color} />
    }
    default: {
      return <ChevWrapperRight color={color} />
    }
  }
}
const CLASSNAME = 'chevron'
const Chevron = ({ direction, color }) => {
  Chevron.propTypes = {
    direction: PropTypes.string,
    color: PropTypes.string
  }
  return (
    <div className={CLASSNAME} tabIndex='1'>
      <GetStyle direction={direction} color={color} />
    </div>
  )
}

export default Chevron
