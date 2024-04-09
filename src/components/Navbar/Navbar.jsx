import React from 'react'
import Tab from '../Props/Tab/Tab'
import './Navbar.scss'
import { faBackward, faHouse, faFile, faBellConcierge, faPhone, faAddressCard,} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
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
    </>
  )
}

export default Navbar;
