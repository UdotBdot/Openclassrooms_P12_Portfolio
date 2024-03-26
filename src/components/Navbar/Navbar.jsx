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
 
        
    </>
  )
}

export default Navbar