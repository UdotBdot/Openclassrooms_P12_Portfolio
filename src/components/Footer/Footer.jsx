import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>  
    <div className='Footer'>
      <p className='Footer__p'> <FontAwesomeIcon icon={faCopyright} /> 2024 SIN_DEV | All Rights Reserved</p>
    </div>
        
    </>

  )
}

export default Footer