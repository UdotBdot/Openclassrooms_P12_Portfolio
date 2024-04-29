import React from 'react'
import Tab from '../props/tab/Tab'
import './navbar.scss'
import { faBackward, faHouse, faFile, faBellConcierge, faPhone, faAddressCard,} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <Tab to="/" icon={faBackward} text="SIN_DEV" ariaLabel={"SIN DEV"}/>
          <Tab to="/home#header" icon={faHouse} text="Home" ariaLabel={"Home"}/>
          <Tab to="/works" icon={faFile} text="Works"  ariaLabel={"Works"}/>
          <Tab to="/home#services" icon={faBellConcierge} text="Services"  ariaLabel={"Services"}/>
          <Tab to="/home#contact" icon={faPhone} text="Contact" ariaLabel={"Contact"}/>
          <Tab to="/about-me" icon={faAddressCard} text="About" ariaLabel={"About-Me"} />
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
