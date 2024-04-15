import React from 'react';
import './header.scss';
import Typewriter from '../typewritter/Typewriter';
import HeaderData from '../../datas/header.json'; 

function Header() {
  const words = ["Frederic SIN", "Front-End Dev", "Born in France", "From Hong-Kong"]; 

  return (
    <>
      <div id="header" className='article'>
        <h1 className='header__h1'>
              <div className='header__sec-text'>
                <Typewriter words={words} delay={32} phraseDelay={700} infinite />
              </div>
              <blockquote>
                <cite>"We Should Always Strive For Greatness"</cite>
              </blockquote>
        </h1>
          <div className='header border-radius margin-16'>
            {HeaderData.map(header => (
              <img
                key={header.headerId}
                loading='eager'
                width={320}
                height={240}
                src={header.headerSrc}
                className={`bg ${header.bgClassName}`} 
                alt={`Header ${header.headerId}`}
              />
            ))}
          </div>
      </div>
    </>
  );
}

export default Header;
