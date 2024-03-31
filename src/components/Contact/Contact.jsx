import React, { useState, useEffect, useRef } from 'react';
import './Contact.scss';
import Input from '../Input/Input';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [messageStatus, setMessageStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3zjqz4w', 'template_vms42zl', form.current, {
        publicKey: 'gv8GAFS6Qr6mcL-ff',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status);
          form.current.reset();
          setMessageStatus('success'); // Mettre à jour le statut du message pour afficher le message de succès
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageStatus('error'); // Mettre à jour le statut du message pour afficher le message d'erreur
        },
      )
      .finally(() => {
        // Réinitialiser le statut du message après un certain délai
        setTimeout(() => {
          setMessageStatus(null);
        }, 5000); // Délai en millisecondes avant de masquer le message (5 secondes dans cet exemple)
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        null
      ) : (
        <section id="contact" className='Article'>
          <div className='Contact'>
            <div className='Contact__me'>
              <h2>Contact Me</h2>
              <p>For inquiries, collaborations, or any further information, please feel free to reach out to me using the contact details provided below</p>
              <p>
                Additionally, I can be reached via <a target="_blank" href="https://twitter.com/UdotBdotTFT">Twitter</a> or <a target="_blank" href="https://discord.gg/e2Y3Zbsa9R">Discord</a> for further ways to reach.
              </p>
            </div>
            <div className='Contact__form'>
              <h2>Contact Form</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className='container-form'>
                  <div className="Input-container">
                    <Input text="Name" autoComplete="Name" name="user_name" placeholder="Your name" type="text" tabIndex="1" required />
                  </div>
                  <div className="Input-container">
                    <Input text="Email" autoComplete="Email" name="user_email" placeholder="Your Email" type="email" tabIndex="2" required />
                  </div>
                  <div className="Input-container">
                    <Input text="Message" autoComplete="Message" name="message" className="message-input" placeholder="Your Message..." tabIndex="3" required htmlFor="Message" textarea />
                  </div>
                  <div>
                    <input id="form-btn" type="submit" value="Send" />
                  </div>
                </div>
              </form>
              {messageStatus === 'success' && <p className='message'>Your message has been sent successfully!</p>}
              {messageStatus === 'error' && <p className='message'>Failed to send the message. Please try again later.</p>}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Contact;
