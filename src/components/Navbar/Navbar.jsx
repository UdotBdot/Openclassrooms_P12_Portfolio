import React from 'react'
import { useEffect, useState } from 'react';
import Tab from '../Tab/Tab'
import './Navbar.scss'
import SkeletonNavbar from '../Skeletons/SkeletonNavbar';
import { faArrowsUpToLine, faHouse, faFile, faGear, faPhone, faCircleHalfStroke, faLanguage } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {isLoading ? (<SkeletonNavbar/>) : (
      <nav className="navbar">
      <ul className="navbar-nav">
        <Tab path="/" icon={faArrowsUpToLine} text="SIN_DEV"/>
        <Tab path="/home" icon={faHouse} text="Home"/>
        <Tab path="/works" icon={faFile} text="Works"/>
        <Tab icon={faGear} text="Services"/>
        <Tab icon={faPhone} text="Contact"/>
        <Tab icon={faCircleHalfStroke} text="Darkmode"/>
        <Tab icon={faLanguage} text="Language"/>
      </ul>
      </nav>
    )}
    
    </>
  )
}

export default Navbar