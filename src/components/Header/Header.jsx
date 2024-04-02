import React, { useState, useEffect } from 'react';
import './Header.scss';
import Typewriter from '../Typewriter/Typewriter';
import SkeletonHeader from '../Skeletons/SkeletonHeader';
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

  const words = ["a Developer", "29 Years Old", "Born in France", "from Hong-Kong"]; 

  const handleNavigation = (path) => {
    navigate(path);
  }
    
  return (
    <>
      {isLoading ? (<SkeletonHeader />) : (
        <div id="header" className='Article'>
          <div className='Header'>
            <img loading='eager' width={319} height={307} src="/images/Grid/bg1.png" className='bg bg1'alt='Cyberpunk Hong-kong photo'></img>
            <img loading='eager' width={319} height={307} src="/images/Grid/bg2.png" className='bg bg2' alt="Cyberpunk Tokyo photo"></img>
            <img loading='eager' width={319} height={307} src="/images/Grid/bg3.png" className='bg bg3' alt='Cyberpunk Hong-kong photo big view'></img>
            <h1 className='Header__h1'>
              <span className='Header__text'>I am</span>
              <span className='Header__text Header__sec-text'>
                <Typewriter words={words} delay={32} phraseDelay={500} infinite />
              </span>
            </h1>
            <img loading='eager' width={319} height={307} src="/images/Grid/bg4.png" className='bg bg4' alt='Colorful Basketball court in Hong-Kong'></img>
            <img loading='eager' width={319} height={307} src="/images/Grid/bg5.png" className='bg bg5' alt="New Kowloon Colorful buildings"></img>
            <img loading='eager' width={319} height={307} src="/images/Grid/bg6.png" className='bg bg6' alt="Crossroads in"></img>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
