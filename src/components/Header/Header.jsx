import React from 'react';
import './Header.scss';
import Typewriter from '../Typewriter/Typewriter';
import HeaderData from '../../datas/Header.json'; 

function Header() {
  const words = ["Frederic SIN", "Front-End Dev", "Born in France", "From Hong-Kong"]; 

  return (
    <>
      <div id="header" className='Article'>
        <h1 className='Header__h1'>
              <div className='Header__sec-text'>
                <Typewriter words={words} delay={32} phraseDelay={700} infinite />
              </div>
              <blockquote>
                <cite>"We Should Always Strive For Greatness"</cite>
              </blockquote>
        </h1>
          <div className='Header border-radius margin-16'>
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
