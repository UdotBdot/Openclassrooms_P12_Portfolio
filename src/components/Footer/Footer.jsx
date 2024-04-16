import React from 'react';
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>  
    <div className='footer'>
      <p className='footer__p'> <FontAwesomeIcon icon={faCopyright} /> 2024 SIN_DEV | All Rights Reserved</p>
    </div>  
    </>

  )
}

export default Footer