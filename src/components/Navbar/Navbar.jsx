import React from 'react'
import { useEffect, useState } from 'react';
import Tab from '../Tab/Tab'
import './Navbar.scss'
import SkeletonNavbar from '../Skeletons/SkeletonNavbar';
import { faArrowsUpToLine, faHouse, faFile, faGear, faPhone, faAddressCard,} from '@fortawesome/free-solid-svg-icons'

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
          <Tab to="/" icon={faArrowsUpToLine} text="SIN_DEV"/>
          <Tab to="/home" icon={faHouse} text="Home"/>
          <Tab to="/about-me" icon={faAddressCard} text="About"  />
          <Tab to="/works" icon={faFile} text="Works"/>
          <Tab to="/home#services" icon={faGear} text="Services"/>
          <Tab to="/" icon={faPhone} text="Contact"/>
        </ul>
      </nav>
    )}
    </>
  )
}

export default Navbar;
