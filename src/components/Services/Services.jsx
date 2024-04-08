import React, { useState, useEffect } from 'react';
import Service from '../Props/Service/Service'
import './Services.scss'
import servicesData from '../../datas/Services.json';

function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? null : (
        <section className='Article'>
          <h2 id="services">My Prestations</h2>
          <div className='Services margin-16'>
            {servicesData.map(service => (
              <Service
                key={service.title}
                className={"margin-16"}
                loading={"lazy"}
                width={32}
                height={32}
                alt={service.alt}
                src={service.src}
                title={service.title}
                text={service.text}
              />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default Services;
