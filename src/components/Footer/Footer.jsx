import React, { useState, useEffect} from 'react';
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>  
    {isLoading ? (null) : (
    <div className='Footer'>
      <p className='Footer__p'> <FontAwesomeIcon icon={faCopyright} /> 2024 SIN_DEV | All Rights Reserved</p>
      <div className='Footer__logo'>
        <a href='https://github.com/UdotBdot' target='_blank'>
          <img width="28" height="28" className="Footer_logos" src="../../images/Logos/github_logo.webp" alt="GitHub Logo" />
        </a>
        <a href="https://www.linkedin.com/in/frederic-sin-965b36100/" target='_blank'>
          <img width="28" height="28" className="Header__logo" src="../../images/Logos/linkedin_logo.webp" alt="LinkedIn Logo" />
        </a>
      </div>
    </div>
    )}

        
    </>

  )
}

export default Footer