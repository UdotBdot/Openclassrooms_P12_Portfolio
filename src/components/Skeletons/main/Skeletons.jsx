import './Skeletons.scss'

import React from 'react'

const Skeletons = ({classes}) => {
    const classNames = `${classes} pulse`
  return <div className={classNames}></div>
}

export default Skeletons