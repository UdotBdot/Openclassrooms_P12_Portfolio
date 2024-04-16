import React from 'react';
import './header.scss';
import Typewriter from '../typewritter/Typewriter';
import AutoSlider from '../auto_slider/AutoSlider'

function Header() {
  const words = ["Frederic SIN", "Web Developer", "Born in France", "From Hong-Kong"]; 

  return (
    <>
      <div id="header" className='article border-radius'>
        <AutoSlider />
        <h1 className='header__h1'>
              <div className='header__sec-text'>
                <Typewriter words={words} delay={32} phraseDelay={700} infinite />
              </div>
              <div className='header__pp'>
                <img width={240} height={240} alt="Profile Picture" src='/images/profile-pic.png'/>
              </div>
              <blockquote>
                <cite>"We Should Always Strive For Greatness"</cite>
              </blockquote>
              <a href="https://github.com/UdotBdot" target='_blank'>
              <img width={32} height={32} src="/images/Logos/github_logo.svg" alt="Github Logo" className='header__logo'/>
              </a>
              <a href="https://www.linkedin.com/in/frederic-sin-965b36100/" target='_blank'>
              <img width={32} height={32} src="/images/Logos/Linkedin.svg" alt="Linkedin Logo" className='header__logo'/>
              </a>
        </h1>
      </div>
    </>
  );
}

export default Header;
