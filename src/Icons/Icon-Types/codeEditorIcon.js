import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Styling = styled.div`
  transform: scale(0.55) translateY(-12px);
`
const CodeEditorIcon = ({ color }) => {
  return (
    <Styling>
      <svg
        id='Layer_1'
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 21.52 28.35'
        tabIndex='-1'
      >
        <title>codeEditorIcon</title>
        <path
          id='Icon_awesome-file-code'
          data-name='Icon awesome-file-code'
          className='cls-1'
          stroke={color}
          fill={'none'}
          d='M21,7v.33H14.18V.5h.32a1.3,1.3,0,0,1,.91.38l5.23,5.23A1.27,1.27,0,0,1,21,7Zm-7.27,2a1.28,1.28,0,0,1-1.28-1.28V.5H1.78A1.28,1.28,0,0,0,.5,1.78h0V26.57a1.28,1.28,0,0,0,1.28,1.28h18A1.28,1.28,0,0,0,21,26.57V9.05ZM7.08,21.9a.28.28,0,0,1-.4,0L3.21,18.66a.29.29,0,0,1,0-.41h0L6.68,15a.28.28,0,0,1,.4,0l1.05,1.11a.3.3,0,0,1,0,.41h0L5.93,18.45l2.18,1.92a.29.29,0,0,1,0,.41h0Zm2.74,2.7-1.46-.43a.27.27,0,0,1-.2-.35h0L11.44,12.5a.29.29,0,0,1,.36-.2h0l1.47.43a.29.29,0,0,1,.2.35h0L10.18,24.4a.29.29,0,0,1-.35.2Zm8.6-5.93L15,21.92a.3.3,0,0,1-.41,0l-1-1.11a.29.29,0,0,1,0-.41h0l2.17-1.91-2.17-1.92a.29.29,0,0,1,0-.41h0l1-1.12A.29.29,0,0,1,15,15l3.47,3.25a.28.28,0,0,1,0,.4v0Z'
        />
      </svg>
    </Styling>
  )
}

CodeEditorIcon.propTypes = {
  color: PropTypes.string
}
export default CodeEditorIcon
