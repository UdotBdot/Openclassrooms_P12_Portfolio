import React, { useState, useRef } from 'react';
import './contact.scss';
import Input from '../Props/Input/Input';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha'; 

function Contact() {

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const captchaKey = import.meta.env.VITE_CAPTCHA_KEY;
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null);
  const [isVerified, setIsVerified] = useState(false); 

  const handleRecaptchaChange = () => {
    setIsVerified(true); 
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isVerified) {
      alert("reCAPTCHA not verified");
      return; 
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status);
          setMessageStatus('success');
          setIsVerified(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageStatus('error');
          setIsVerified(false);
        },
      )
      .finally(() => {
        setTimeout(() => {
          setMessageStatus(null);
          form.current.reset();
        }, 2000);
  

      });
  };

  return (
    <>
      <section id="contact" className='article'>
        <div className='contact'>
          <div className='contact__me'>
            <h2>Contact Me</h2>
            <p className='margin-16'>For inquiries, collaborations, or any further information, please feel free to reach out to me using the contact details provided below</p>
            <p>
              Additionally, I can be reached via <a target="_blank" href="https://twitter.com/UdotBdotTFT">Twitter</a> or <a target="_blank" href="https://discord.gg/e2Y3Zbsa9R">Discord</a> for further ways to reach.
            </p>
          </div>
          <div className='contact__form'>
            <h2>Contact Form</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className='container-form'>
                <div className="input-container">
                  <Input className='border-radius padding-8' text="Name" autoComplete="Name" name="user_name" placeholder="Your name" type="text" required />
                </div>
                <div className="input-container">
                  <Input className='border-radius padding-8' text="Email" autoComplete="Email" name="user_email" placeholder="Your Email" type="email" required />
                </div>
                <div className="input-container">
                  <Input text="Message" autoComplete="Message" name="Message" className="message-input border-radius padding-8" placeholder="Your Message..." required htmlFor="Message" textarea />
                </div>
                <div>
                  <input className='border-radius margin-16' id="form-btn" type="submit" value="Send" />
                </div>
                <div>
                  <ReCAPTCHA
                    sitekey={captchaKey}
                    onChange={handleRecaptchaChange}
                  />
                </div>
              </div>
            </form>
            {messageStatus === 'success' && <p className='message message__green'>Your message has been sent successfully!</p>}
            {messageStatus === 'error' && <p className='message message__red'>Failed to send the message. Please try again later.</p>}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;