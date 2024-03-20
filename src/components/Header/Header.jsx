import React, { useState, useEffect} from 'react';
import './Header.scss';
import Typewriter from '../Typewriter/Typewriter';
import SkeletonHeader from '../Skeletons/SkeletonHeader/SkeletonHeader';
import { useNavigate } from 'react-router';

function Header() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const words = ["a Developer", "29 Years Old", "Born in France", "Originally from Hong-Kong"]; 

  const handleNavigation = (path) => {
    navigate(path);}
    
  return (
    <>
    {isLoading ? (<SkeletonHeader/>) : (
      <div className='Header'>
      <h1 className='Header__h1'>
        <span className='Header__text'>I am</span>
        <span className='Header__text Header__sec-text'>
          <Typewriter words={words} delay={150} infinite />
        </span>
      </h1>
      <a className='Header__about-me' onClick={() => handleNavigation("/about-me")} >About Me</a>
      <div className='Header__logos'>
        <a href='https://github.com/UdotBdot' target='_blank'>
          <img width="50" height="50" className="Header__logo" src="../../images/github_logo.png" alt="GitHub Logo" />
        </a>
        <a href="https://www.linkedin.com/in/frederic-sin-965b36100/" target='_blank'>
          <img width="50" height="50" className="Header__logo" src="../../images/linkedin_logo.png" alt="LinkedIn Logo" />
        </a>
      </div>
    </div>
    )}
    
    </>
  );
}

export default Header;
