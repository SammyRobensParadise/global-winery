import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styles = styled.div`
  transform: scale(0.6) translateY(-1px);
`
const ExitIcon = ({ color }) => {
  ExitIcon.propTypes = {
    color: PropTypes.string
  }
  return (
    <Styles>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 22 23.2'
        tabIndex='0'
      >
        <title>exitIcon</title>
        <polygon
          fill={color}
          points='21.23 2 20.77 1.56 11.01 11.32 1.23 1.56 0.77 2 10.55 11.78 0.77 21.56 1.23 22 11.01 12.22 20.77 22 21.23 21.56 11.45 11.78 21.23 2'
        />
      </svg>
    </Styles>
  )
}

export default ExitIcon
