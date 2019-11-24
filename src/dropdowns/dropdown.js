import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../Icons/Icons'

const DropdownWrapper = styled.div`
  width: 250px;
  height: ${p => p.items * 52}px;
  color: #fff;
  disply: block;
  background: #909090;
  border-radius: 6px 6px 6px 6px;
  position: absolute;
  padding-top: 6px;
`
const ArrowTop = styled.div`
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 23px solid #909090;
  display: inline-block;
  transform: translateY(-14px);
`
const IconWrapper = styled.span`
  display: inline-block;
  text-align: left;
`
const DropdownItem = styled.div`
  color: #fff;
  text-align: center;
  padding-left: 12px;
  display: inline-flex;
  cursor: pointer;
  &:hover{
    background: #adadad;
    width: 100%;
  }
`
const DropdownComp = styled.div`
  display: flex;
`
const DropdownText = styled.div`
  display: inline;
  padding-left: 20px;
  padding-right: 12px;
  margin-top: 11px;
  font-size: 14px;
`
const DROPDOWN_CLASSNAME = 'Dropdown-wrapper'
class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  handleClick = () => {
    this.setState({
      isOpen: true
    })
    document.addEventListener('click', this.closeDropdown)
  }
  closeDropdown = () => {
    this.setState({
      isOpen: false
    })
    document.removeEventListener('click', this.closeDropdown)
  }
  render() {
    const { Anchor, Children } = this.props
    const items = Children.length
    return (
      <div className={DROPDOWN_CLASSNAME}>
        <IconWrapper>
          <Icon className={'-anchor'} type={Anchor} event={this.handleClick} />
        </IconWrapper>
        <RenderDropdown
          className={'-dropdown'}
          isOpen={this.state.isOpen}
          Children={Children}
          items={items}
        />
      </div>
    )
  }
}

const RenderDropdown = ({ isOpen, Children, items }) => {
  if (isOpen) {
    return (
      <div>
        <DropdownWrapper items={items}>
          <ArrowTop type={'div'} />
          {Children.map(Children => (
            <DropdownComp>
              <DropdownItem onClick={Children.event}>
                <Icon event={Children.event} type={Children.icon} />
                <DropdownText>{Children.text}</DropdownText>
              </DropdownItem>
            </DropdownComp>
          ))}
        </DropdownWrapper>
      </div>
    )
  }
  return null
}

Dropdown.propTypes = {
  Anchor: PropTypes.element,
  Children: PropTypes.array
}
RenderDropdown.propTypes = {
  isOpen: PropTypes.bool,
  Children: PropTypes.array,
  items: PropTypes.number
}
export default Dropdown
