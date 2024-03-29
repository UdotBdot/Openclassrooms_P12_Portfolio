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
        <Tab href="" path="/" icon={faArrowsUpToLine} text="SIN_DEV"/>
        <Tab href="" path="/home" icon={faHouse} text="Home"/>
        <Tab href="" path="/about-me" icon={faAddressCard} text="About"  />
        <Tab href="" path="/works" icon={faFile} text="Works"/>
        <Tab href="/home#services" path="/home#services" icon={faGear} text="Services"/>
        <Tab href="" icon={faPhone} text="Contact"/>
      </ul>
      </nav>
    )}
    
    </>
  )
}

export default Navbar