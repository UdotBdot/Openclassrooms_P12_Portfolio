import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './loader.scss';
import '../../assets/Styles/Fonts.scss';

function Loader() {
  const loaderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/home');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigate]);

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
        if (!document.contains(el.current)) return;
        if (currentLength < messages[messageIndex].length) {
          currentLength += 2;
          if (currentLength > messages[messageIndex].length) {
            currentLength = messages[messageIndex].length;
          }
          const message = generateRandomString(currentLength);
          el.current.innerHTML = message;
          setTimeout(animateIn, 5.7); 
        } else {
          setTimeout(animateFadeBuffer, 5.7);
        }
      };
  
      const animateFadeBuffer = () => {
        if (!document.contains(el.current)) return;
        if (!fadeBuffer) {
          fadeBuffer = [];
          for (let fader of messages[messageIndex]) {
            fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: fader });
          }
        }
  
        let doCycles = false;
        let message = '';
  
        for (let fader of fadeBuffer) {
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
          setTimeout(animateFadeBuffer, 9.4);
        } else {
          setTimeout(cycleText, 189);
        }
      };
  
      const cycleText = () => {
        if (!document.contains(el.current)) return;
        messageIndex = (messageIndex + 1) % messages.length;
        currentLength = 0;
        fadeBuffer = false;
        el.current.innerHTML = '';
        setTimeout(animateIn, 40);
      };
  
      animateIn();
    };
  
    const messenger = new Messenger(loaderRef);
  
    return () => {};
  }, []);  

  return (
    <main>
      <section>
        <div className='loader'>
        <div className='loader__text' ref={loaderRef}></div>
        <div className="loader__progress border-radius">
          <FontAwesomeIcon className='loader__spinner' icon={faSpinner} />
        </div>
      </div>
      </section>
    </main>

  );
}

export default Loader;
