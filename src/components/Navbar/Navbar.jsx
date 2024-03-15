import React from 'react'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
        <nav className='Navbar'>
          <FontAwesomeIcon className='Navbar__icon' icon={faBars} />
          <div>Home</div>
          <div>Works</div>
          <div>Contact</div>
        </nav>
    </>
  )
}

export default Navbar