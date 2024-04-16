import React from 'react';
import Service from '../props/service/Service'
import './services.scss'
import servicesData from '../../datas/services.json';

function Services() {
  return (
    <>
        <section className='article'>
          <h2 id="services">My Prestations</h2>
          <div className='services'>
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
    </>
  )
}

export default Services;
