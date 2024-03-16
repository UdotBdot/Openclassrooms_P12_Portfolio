import React from 'react'
import Tab from '../Tab/Tab'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
        <nav className='Navbar'>
          <FontAwesomeIcon className='Navbar__icon' icon={faBars} />
        </nav>
    </>
  )
}

export default Navbar