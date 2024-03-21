import React from 'react'
import { useEffect, useState } from 'react';
import SkeletonNavbar from '../Skeletons/SkeletonNavbar';
import Tab from '../Tab/Tab'
import './Navbar.scss'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpToLine, faHouse, faFile, faGear, faPhone, faCircleHalfStroke, faLanguage } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);}
  return (
    <>
        {isLoading ? (
          <SkeletonNavbar />
        ) : (
          <nav className='Navbar Navbar-position'>
          <a onClick={() => handleNavigation("/")} className='Navbar__display'>
          <Tab text={"SIN_DEV"} className={"Navbar__display Navbar__title Navbar__text"} />
          <FontAwesomeIcon className='Navbar__icon' icon={faArrowsUpToLine} />
          </a>
          <ul>
            <a onClick={() => handleNavigation("/home")} className='Navbar__display'>
              <FontAwesomeIcon className='Navbar__tab-icon'  icon={faHouse} />
              <Tab text={"Home"} className={"Navbar__text"}/>
            </a>
          <a onClick={() => handleNavigation("/works")} className='Navbar__display'>
            <FontAwesomeIcon className='Navbar__tab-icon' icon={faFile} />
            <Tab text={"Works"} className={"Navbar__text"}/>
          </a>
          <a className='Navbar__display'>
            <FontAwesomeIcon className='Navbar__tab-icon' icon={faGear} />
            <Tab text={"Services"} className={"Navbar__text"}/>
          </a>
          <a className='Navbar__display'>
            <FontAwesomeIcon icon={faPhone} className='Navbar__tab-icon'/>
            <Tab text={"Contact"} className={"Navbar__text"}/>
          </a>
          <a className='Navbar__display'>
          <FontAwesomeIcon icon={faCircleHalfStroke} className='Navbar__tab-icon'/>
          <Tab text={"Darkmode"} className={"Navbar__text"}/>
          </a>
          <a className='Navbar__display'>
          <FontAwesomeIcon icon={faLanguage} className='Navbar__tab-icon'/>
          <Tab text={"Languages"} className={"Navbar__text"}/>
          </a>
          </ul>
        </nav>
        )}
        
    </>
  )
}

export default Navbar