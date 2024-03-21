import React from 'react'

function Tab(props) {
const {className, text} = props
  return (
    <>
      <li className={className}>
        {text}
      </li>
    </>
  )
}

export default Tab