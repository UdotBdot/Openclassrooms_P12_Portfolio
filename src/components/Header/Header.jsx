import React, { useState, useEffect} from 'react';
import './Header.scss';
import Typewriter from '../Typewriter/Typewriter';
import SkeletonHeader from '../Skeletons/SkeletonHeader/SkeletonHeader';

function Header() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const words = ["a Developer", "29 years old", "Born in France", "originally from Hong-Kong"]; 

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
