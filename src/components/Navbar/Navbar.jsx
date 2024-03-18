import React from 'react'
import Tab from '../Tab/Tab'
import './Navbar.scss'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpToLine, faHouse, faFile, faGear, faPhone, faCircleHalfStroke, faLanguage } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);}
  return (
    <>
        <nav className='Navbar'>
          <a onClick={() => handleNavigation("/")} className='Navbar__display'>
          <Tab text={"SIN_DEV"} className={"Navbar__display Navbar__title Navbar__tab-size"} />
          <FontAwesomeIcon className='Navbar__icon' icon={faArrowsUpToLine} />
          </a>
          <ul>
            <a onClick={() => handleNavigation("/home")} className='Navbar__display'>
              <FontAwesomeIcon className='Navbar__tab-icon'  icon={faHouse} />
              <Tab text={"Home"} className={"Navbar__text Navbar__tab-size"}/>
            </a>
          <a onClick={() => handleNavigation("/works")} className='Navbar__display'>
            <FontAwesomeIcon className='Navbar__tab-icon' icon={faFile} />
            <Tab text={"Works"} className={"Navbar__text Navbar__tab-size"}/>
          </a>
          <a className='Navbar__display'>
            <FontAwesomeIcon className='Navbar__tab-icon' icon={faGear} />
            <Tab text={"Services"} className={"Navbar__text Navbar__tab-size"}/>
          </a>
          <a className='Navbar__display'>
            <FontAwesomeIcon icon={faPhone} className='Navbar__tab-icon'/>
            <Tab text={"Contact"} className={"Navbar__text Navbar__tab-size"}/>
          </a>
          <a className='Navbar__display'>
          <FontAwesomeIcon icon={faCircleHalfStroke} className='Navbar__tab-icon'/>
          <Tab text={"Darkmode"} className={"Navbar__text Navbar__tab-size"}/>
          </a>
          <a className='Navbar__display'>
          <FontAwesomeIcon icon={faLanguage} className='Navbar__tab-icon'/>
          <Tab text={"Languages"} className={"Navbar__text Navbar__tab-size"}/>
          </a>
          </ul>
        </nav>
    </>
  )
}

export default Navbar