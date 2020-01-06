import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  transform: scale(0.6);
`
const consoleIcon = ({ color }) => {
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20.98 20.98'
        tabIndex='0'
      >
        <title>consoleIcon</title>
        <path
          stroke={color}
          fill={'none'}
          id='Icon_open-terminal'
          data-name='Icon open-terminal'
          className='cls-1'
          d='M.72.5A.21.21,0,0,0,.5.69V20.25a.24.24,0,0,0,.22.23H20.25a.24.24,0,0,0,.23-.23h0V.72a.22.22,0,0,0-.2-.22H.72Zm3.53,2,4.3,4.3-4.3,4.3-1.8-1.8L5,6.75l-2.5-2.5ZM10.5,8H18v2.5H10.5Z'
        />
      </svg>
    </Styling>
  )
}

consoleIcon.propTypes = {
  color: PropTypes.string
}
export default consoleIcon
