import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styles = styled.div`
  transform: scale(0.8) translateY(2px);
`
const HomeIcon = ({ color }) => {
  HomeIcon.propTypes = {
    color: PropTypes.string
  }
  return (
    <Styles>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 40 33.96'
        tabIndex='0'
      >
        <title>homeIcon</title>
        <polygon
          stroke={color}
          className='cls-1'
          points='20 1.61 1.73 16.21 2.02 16.61 7.77 12.01 7.77 32.15 32.22 32.15 32.22 12.01 37.97 16.61 38.27 16.21 20 1.61'
        />
      </svg>
    </Styles>
  )
}

export default HomeIcon
