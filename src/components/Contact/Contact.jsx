import React, { useState, useEffect} from 'react';
import './Contact.scss';
import Input from '../Input/Input';

function Contact() {

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {isLoading ? (null) : (
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
            <form>
              <div className='container-form'>
                <div className="Input-container">
                  <Input text="Name" autoComplete="Name" name="Name" placeholder="Your name" type="text" tabIndex="1" required autoFocus />
                </div>
                <div className="Input-container">
                  <Input text="Email" autoComplete="Email" name="Email" placeholder="Your Email" type="email" tabIndex="2" required />
                </div>
                <div className="Input-container">
                  <Input text="Message" autoComplete="Message" name="Message" className="message-input" placeholder="Your Message..." tabIndex="3" required htmlFor="Message" textarea />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )}
      
    </>
  );
}

export default Contact;
