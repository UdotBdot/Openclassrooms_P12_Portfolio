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
            <img width={319} height={307} src="/images/Grid/bg1.jpg" className='bg bg1'></img>
            <img width={319} height={307} src="/images/Grid/bg2.jpg" className='bg bg2'></img>
            <img width={319} height={307} src="/images/Grid/bg3.jpg" className='bg bg3'></img>
            <h1 className='Header__h1'>
              <span className='Header__text'>I am</span>
              <span className='Header__text Header__sec-text'>
                <Typewriter words={words} delay={32} phraseDelay={500} infinite />
              </span>
            </h1>
            <img width={319} height={307} src="/images/Grid/bg4.jpg" className='bg bg4'></img>
            <img width={319} height={307} src="/images/Grid/bg5.jpg" className='bg bg5'></img>
            <img width={319} height={307} src="/images/Grid/bg6.jpg" className='bg bg6'></img>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
