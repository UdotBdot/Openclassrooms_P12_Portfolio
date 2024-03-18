import React from 'react'
import Tab from '../Tab/Tab'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpToLine, faHouse, faFile, faGear, faPhone, faCircleHalfStroke, faLanguage } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
        <nav className='Navbar'>
          <div className='Navbar__display'>
          <Tab text={"SIN_DEV"} className={"Navbar__display Navbar__title Navbar__tab-size"} />
          <FontAwesomeIcon className='Navbar__icon' icon={faArrowsUpToLine} />
          </div>
          <ul>
            <div className='Navbar__display'>
              <FontAwesomeIcon className='Navbar__tab-icon'  icon={faHouse} />
              <Tab text={"Home"} className={"Navbar__text Navbar__tab-size"}/>
            </div>
          <div className='Navbar__display'>
            <FontAwesomeIcon className='Navbar__tab-icon' icon={faFile} />
            <Tab text={"Works"} className={"Navbar__text Navbar__tab-size"}/>
          </div>
          <div className='Navbar__display'>
            <FontAwesomeIcon className='Navbar__tab-icon' icon={faGear} />
            <Tab text={"Services"} className={"Navbar__text Navbar__tab-size"}/>
          </div>
          <div className='Navbar__display'>
            <FontAwesomeIcon icon={faPhone} className='Navbar__tab-icon'/>
            <Tab text={"Contact"} className={"Navbar__text Navbar__tab-size"}/>
          </div>
          <div className='Navbar__display'>
          <FontAwesomeIcon icon={faCircleHalfStroke} className='Navbar__tab-icon'/>
          <Tab text={"Darkmode"} className={"Navbar__text Navbar__tab-size"}/>
          </div>
          <div className='Navbar__display'>
          <FontAwesomeIcon icon={faLanguage} className='Navbar__tab-icon'/>
          <Tab text={"Languages"} className={"Navbar__text Navbar__tab-size"}/>
          </div>
          </ul>
        </nav>
    </>
  )
}

export default Navbar