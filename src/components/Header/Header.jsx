import React from 'react';
import './Header.scss';
import Typewriter from '../Typewriter/Typewriter';
import SkeletonHeader from '../Skeletons/SkeletonHeader';
import HeaderData from '../../datas/Header.json'; 

function Header() {
  const words = ["A Developer", "29 Years Old", "Born in France", "From Hong-Kong"]; 

  return (
    <>
        <div id="header" className='Article'>
          <div className='Header border-radius margin-16'>
            {HeaderData.map(header => (
              <img
                key={header.headerId}
                loading='eager'
                width={319}
                height={218}
                src={header.headerSrc}
                className={`bg ${header.bgClassName}`} 
                alt={`Header ${header.headerId}`}
              />
            ))}
            <h1 className='Header__h1'>
              <span className='Header__text'>I am</span>
              <span className='Header__text Header__sec-text'>
                <Typewriter words={words} delay={32} phraseDelay={700} infinite />
              </span>
            </h1>
          </div>
        </div>
    </>
  );
}

export default Header;
