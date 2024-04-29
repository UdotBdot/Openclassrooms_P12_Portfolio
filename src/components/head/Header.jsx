import React from 'react';
import './header.scss';
import Typewriter from '../typewritter/Typewriter';
import AutoSlider from '../auto_slider/AutoSlider';

function Header() {
  const words = ["Frederic SIN", "Web Developer", "Born in France", "From Hong-Kong"]; 

  return (
    <>
      <div className='logo'>
      <p>WEB</p>
      <img  width={80} height={80} src='/images/Logos/Sin_dev.png' alt='logo SIN_DEV'/>
      <p>DEV</p>
      </div>
      <div id="header" className='article border-radius'>
        <AutoSlider />
        <h1 className='header__h1'>
              <div className='article-hero article-space'>
                <div className='header__sec-text'>
                  <Typewriter words={words} delay={32} phraseDelay={700} infinite />
                </div>
                <div className='header__pp'>
                  <img width={240} height={240} alt="Profile Picture" src='/images/profile-pic.webp' loading='eager'/>
                </div>
              </div>
              <div className='header__text'>
                    <blockquote>
                      <cite>"We Should Always Strive For Greatness"</cite>
                    </blockquote>
                    
                    <a href="https://github.com/UdotBdot" target='_blank'>
                      <button className='header__button form-btn'>
                        <img width={32} height={32} src="/images/Logos/github_logo.svg" alt="Github Logo" className='header__logo'/>
                        GitHub
                      </button>
                    </a>

                    <a href="https://www.linkedin.com/in/frederic-sin-965b36100/" target='_blank'>
                      <button className='header__button form-btn'>
                        <img width={32} height={32} src="/images/Logos/Linkedin.svg" alt="Linkedin Logo" className='header__logo'/>
                        LinkedIn
                      </button>
                    </a>
              </div>
        </h1>
      </div>
    </>
  );
}

export default Header;
