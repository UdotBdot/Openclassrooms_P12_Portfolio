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
            <h1 className='Header__h1'>
              <span className='Header__text'>I am</span>
              <span className='Header__text Header__sec-text'>
                <Typewriter words={words} delay={32} phraseDelay={500} infinite />
              </span>
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
