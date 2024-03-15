import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import './Loader.scss';
import '../../assets/Styles/Fonts.scss'

function Loader() {
  const loaderRef = useRef(null);
  const navigate = useNavigate();

  useEffect( () => {
    setTimeout(() => {
      navigate('/home')
    }, 7050);
  })
  

  useEffect(() => {
    const Messenger = function (el) {
        const codeletters = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn123456789";
        let messageIndex = 0;
        let currentLength = 0;
        let fadeBuffer = false;
        const messages = [
          'Bienvenue',
          'Welcome',
          '歡迎 (ni-hao)',
        ];
      
        const generateRandomString = (length) => {
          let randomText = '';
          while (randomText.length < length) {
            randomText += codeletters.charAt(Math.floor(Math.random() * codeletters.length));
          }
          return randomText;
        };
      
        const animateIn = () => {
          if (currentLength < messages[messageIndex].length) {
            currentLength += 2;
            if (currentLength > messages[messageIndex].length) {
              currentLength = messages[messageIndex].length;
            }
            const message = generateRandomString(currentLength);
            el.current.innerHTML = message;
            setTimeout(animateIn, 20);
          } else {
            setTimeout(animateFadeBuffer, 20);
          }
        };
        const animateFadeBuffer = () => {
          if (!fadeBuffer) {
            fadeBuffer = [];
            for (let i = 0; i < messages[messageIndex].length; i++) {
              fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: messages[messageIndex].charAt(i) });
            }
          }
      
          let doCycles = false;
          let message = '';
      
          for (let i = 0; i < fadeBuffer.length; i++) {
            const fader = fadeBuffer[i];
            if (fader.c > 0) {
              doCycles = true;
              fader.c--;
              message += codeletters.charAt(Math.floor(Math.random() * codeletters.length));
            } else {
              message += fader.l;
            }
          }
      
          el.current.innerHTML = message;
      
          if (doCycles) {
            setTimeout(animateFadeBuffer, 50);
          } else {
            setTimeout(cycleText, 2000);
          }
        };
      
        const cycleText = () => {
          messageIndex = (messageIndex + 1) % messages.length;
          currentLength = 0;
          fadeBuffer = false;
          el.current.innerHTML = '';
          setTimeout(animateIn, 200);
        };
      
        animateIn(); // Start animation
      };

    const messenger = new Messenger(loaderRef);

    // Clean up function
    return () => {
      // Any clean-up code goes here
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <>
    <div className='Loader'>
      <div className="Loader__bulb-container">
        <div className='Loader__wire'></div>
        <div className='Loader__connector'>
          <div className='Loader__grove'></div>
          <div className='Loader__grove'></div>
          <div className='Loader__grove'></div>
        </div>
        <div className='Loader__bulb'>
          <div className='Loader__metal-wire'></div>
          <div className='Loader__metal-wire'></div>
          <div className='Loader__metal-wire'></div>
        </div>
      </div>
      <div className='Loader__text' ref={loaderRef}></div>
      <div class="Loader__progress"></div>
    </div>
    </>
  );
}

export default Loader;
