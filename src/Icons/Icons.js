import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const IconWrapper = styled.div`
  cursor: pointer;
  user-select: none;
  line-height: 1;
`
const IconStyles = styled.div`
  width: 38px;
  height: 38px;
  background: ${p => (p.color ? p.color : 'none')};
  border-radius: ${p =>
    p.circle ? '18.5px 18.5px 18.5px 18.5px' : p.square ? '6px 6px 6px 6px' : 'none'};
`
const IconInner = styled.div`
  color: #fff !important;
  line-height: 1;
`
const ICON_CLASSNAME = 'global-icons'
const Icon = ({ type, hoverable, circle, square, color, event }) => {
  Icon.propTypes = {
    type: PropTypes.element,
    hoverable: PropTypes.bool,
    circle: PropTypes.bool,
    square: PropTypes.bool,
    color: PropTypes.string,
    event: PropTypes.func
  }
  return (
    <div className={ICON_CLASSNAME}>
      <IconWrapper onClick={event}>
        <IconStyles {...{ hoverable, circle, square, color }}>
          <IconInner>{type}</IconInner>
        </IconStyles>
      </IconWrapper>
    </div>
  )
}
export default Icon
