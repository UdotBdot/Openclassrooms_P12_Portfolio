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

  const words = ["A Developer", "29 Years Old", "Born in France", "From Hong-Kong"]; 

  const handleNavigation = (path) => {
    navigate(path);
  }
    
  return (
    <>
      {isLoading ? (<SkeletonHeader />) : (
        <div id="header" className='Article'>
          <div className='Header'>
            <img loading='eager' width={319} height={218} src="/images/Grid/bg1.webp" className='bg bg1'alt='Cyberpunk Hong-kong photo'></img>
            <img loading='eager' width={319} height={218} src="/images/Grid/bg2.webp" className='bg bg2' alt="Cyberpunk Tokyo photo"></img>
            <img loading='eager' width={319} height={218} src="/images/Grid/bg3.webp" className='bg bg3' alt='Cyberpunk Hong-kong photo big view'></img>
            <h1 className='Header__h1'>
              <span className='Header__text'>I am</span>
              <span className='Header__text Header__sec-text'>
                <Typewriter words={words} delay={32} phraseDelay={700} infinite />
              </span>
            </h1>
            <img loading='eager' width={319} height={218} src="/images/Grid/bg4.webp" className='bg bg4' alt='Colorful Basketball court in Hong-Kong'></img>
            <img loading='eager' width={319} height={218} src="/images/Grid/bg5.webp" className='bg bg5' alt="New Kowloon Colorful buildings"></img>
            <img loading='eager' width={319} height={218} src="/images/Grid/bg6.webp" className='bg bg6' alt="Crossroads in"></img>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
