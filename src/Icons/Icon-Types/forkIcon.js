import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  transform: scale(0.7) translateX(5px) translateY(-3px);
  padding-bottom: 8px;
`
const ForkIcon = ({ color }) => {
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 45 49'
        tabIndex='0'
      >
        <title>forkIcon</title>
        <path
          id='Icon_awesome-code-branch'
          data-name='Icon awesome-code-branch'
          className='cls-1'
          fill={'none'}
          stroke={color}
          d='M36.62,13.89a7.58,7.58,0,1,0-9.7,7.28,5.86,5.86,0,0,1-1.05,3.5c-1.45,1.82-4.67,2.12-8.07,2.43-2.67.25-5.43.51-7.7,1.6V15.06a7.58,7.58,0,1,0-4.54,0V33.94a7.6,7.6,0,1,0,5,.17A3.21,3.21,0,0,1,12,32.84c1.53-.78,3.82-1,6.26-1.22,4-.36,8.52-.8,11.2-4.11a10.18,10.18,0,0,0,2-6.43A7.6,7.6,0,0,0,36.62,13.89ZM7.83,6.31A1.52,1.52,0,1,1,6.31,7.83h0A1.53,1.53,0,0,1,7.83,6.31Zm0,36.38a1.52,1.52,0,1,1,0-3,1.5,1.5,0,0,1,1.51,1.51h0A1.52,1.52,0,0,1,7.83,42.69ZM29.05,12.38a1.52,1.52,0,1,1-1.52,1.51A1.51,1.51,0,0,1,29.05,12.38Z'
        />
      </svg>
    </Styling>
  )
}

ForkIcon.propTypes = {
  color: PropTypes.string
}
export default ForkIcon
