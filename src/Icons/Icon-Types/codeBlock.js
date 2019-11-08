import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  margin-left: 4.5px;
  padding-top: 2px;
`
const CodeBlock = ({ color }) => {
  CodeBlock.propTypes = {
    color: PropTypes.string
  }
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 34 38'
        className='outer'
        tabIndex='-1'
      >
        <title>codeBlock</title>
        <g id='code001_-_E0C5' data-name='code001 - E0C5' className='cls-1'>
          <g className='cls-1' fill={color}>
            <path d='M8.61,25.7.69,17.78,8.61,9.85l.46.44L1.59,17.78l7.48,7.48Zm2.76,3.16-.62-.16,5.88-22,.62.16Zm8-3.16-.46-.44,7.49-7.48-7.49-7.49.46-.44,7.93,7.93Z' />
          </g>
        </g>
      </svg>
    </Styling>
  )
}

export default CodeBlock
