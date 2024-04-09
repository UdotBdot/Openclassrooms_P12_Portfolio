import React, { useState, useRef } from 'react';
import './Contact.scss';
import Input from '../Props/Input/Input';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios';

function Contact() {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const captchaPublic = import.meta.env.VITE_PUBLIC_CAPTCHA
  const form = useRef();
  const recaptcha = useRef()
  const [messageStatus, setMessageStatus] = useState(null);


  const sendEmail = (e) => {
    e.preventDefault();
    const token = recaptcha.current.getValue(); 
    if (!token) {
      console.error('reCAPTCHA validation failed');
      setMessageStatus('error');
      return;
    }
    const formData = new FormData(form.current);
    formData.append('captchaValue', token);
  
    axios.post('http://localhost:8080/verify', formData)
      .then((response) => {
        if (response.data.success) {
          emailjs.sendForm(serviceId, templateId, form.current, {
            publicKey: publicKey,
          }).then(
            (response) => {
              console.log('SUCCESS!', response.status);
              form.current.reset();
              setMessageStatus('success');
            },
            (error) => {
              console.log('FAILED...', error.text);
              setMessageStatus('error');
            }
          ).finally(() => {
            setTimeout(() => {
              setMessageStatus(null);
            }, 5000);
          });
        } else {
          console.error('reCAPTCHA validation failed');
          setMessageStatus('error');
        }
      })
      .catch((error) => {
        console.error('Error verifying reCAPTCHA:', error);
        setMessageStatus('error');
      });
  };
  return (
    <>
        <section id="contact" className='Article'>
          <div className='Contact'>
            <div className='Contact__me'>
              <h2>Contact Me</h2>
              <p className='margin-16'>For inquiries, collaborations, or any further information, please feel free to reach out to me using the contact details provided below</p>
              <p>
                Additionally, I can be reached via <a target="_blank" href="https://twitter.com/UdotBdotTFT">Twitter</a> or <a target="_blank" href="https://discord.gg/e2Y3Zbsa9R">Discord</a> for further ways to reach.
              </p>
            </div>
            <div className='Contact__form'>
              <h2>Contact Form</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className='container-form'>
                  <div className="Input-container">
                    <Input className='border-radius padding-8' text="Name" autoComplete="Name" name="user_name" placeholder="Your name" type="text" required />
                  </div>
                  <div className="Input-container">
                    <Input className='border-radius padding-8' text="Email" autoComplete="Email" name="user_email" placeholder="Your Email" type="email" required />
                  </div>
                  <div className="Input-container">
                    <Input text="Message" autoComplete="Message" name="Message" className="message-input border-radius padding-8" placeholder="Your Message..." required htmlFor="Message" textarea />
                  </div>
                  <div>
                    <input className='border-radius margin-16' id="form-btn" type="submit" value="Send" />
                  </div>
                  <ReCAPTCHA ref={recaptcha} sitekey={captchaPublic} />
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
