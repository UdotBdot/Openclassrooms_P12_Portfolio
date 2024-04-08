import React from 'react'
import { useEffect, useState } from 'react';
import Tab from '../Props/Tab/Tab'
import './Navbar.scss'
import SkeletonNavbar from '../Skeletons/SkeletonNavbar';
import { faBackward, faHouse, faFile, faBellConcierge, faPhone, faAddressCard,} from '@fortawesome/free-solid-svg-icons'

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
          <Tab to="/" icon={faBackward} text="SIN_DEV"/>
          <Tab to="/home#header" icon={faHouse} text="Home"/>
          <Tab to="/works" icon={faFile} text="Works"/>
          <Tab to="/home#services" icon={faBellConcierge} text="Services"/>
          <Tab to="/home#contact" icon={faPhone} text="Contact"/>
          <Tab to="/about-me" icon={faAddressCard} text="About"  />
        </ul>
      </nav>
    )}
    </>
  )
}

export default Navbar;
