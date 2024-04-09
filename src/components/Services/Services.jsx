import React from 'react';
import Service from '../Props/Service/Service'
import './Services.scss'
import servicesData from '../../datas/Services.json';

function Services() {
  return (
    <>
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
    </>
  )
}

export default Services;
