import React from 'react'
import './Tab.scss'

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