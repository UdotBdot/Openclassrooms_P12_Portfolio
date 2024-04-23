import React, { useState, useEffect } from 'react';
import './cookie.scss';

function Cookie({ onAccept, onRefuse }) {
  const [hideCookie, setHideCookie] = useState(false);

  useEffect(() => {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('cookieConsent='))) {
      setHideCookie(true);
    }
  }, []);

  const handleAccept = () => {
    setHideCookie(true);
    onAccept(); 
    document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  };

  const handleRefuse = () => {
    setHideCookie(true);
    onRefuse(); 
    document.cookie = "cookieConsent=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  };

  return (
    (hideCookie ? null : (
      <div className='border-radius' id="cookies">
        <div className="cookies__container">
          <div className="cookies__subcontainers">
            <div className="cookie">
              <p className='margin-4'>This website uses reCAPTCHA from google as a third-party cookies to ensure a secure way to contact me.</p> 
              <p className='margin-4'>Please note that if you refuse cookies, the contact form will not be available.</p>
              <button onClick={handleAccept} className='border-radius cookie__btn margin-4' id='form-btn'>I agree</button>
              <button onClick={handleRefuse} className='border-radius cookie__btn margin-4' id='form-btn'>I refuse</button>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}

export default Cookie;
