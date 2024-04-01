import React, { useState, useEffect } from 'react';
import Service from '../Service/Service'
import './Services.scss'

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
    {isLoading ? (null): (
      <section className='Article'>
      <h2 id="services">My Prestations</h2>
      <div className='Services'>
         <Service loading={"lazy"} width={32} height={32} alt={"Build App Logo"} src={"../../images/Logos/build.png"} title={"Web/App"} text="Crafting versatile, Mobile-First and Desktop-First Web/App solutions tailored for diverse objectives." />

         <Service loading={"lazy"} width={32} height={32} alt={"SEO/Performance Logo"} src={"../../images/Logos/performance.png"} title={"SEO/Performance"} text="Implementing SEO strategies and min/max Performances ensuring online visibility, and optimal experience."/>

         <Service loading={"lazy"} width={32} height={32} alt={"Debug Logo"} src={"../../images/Logos/bugs.png"} title={"Debug"} text="Facing challenges with your Web App? My comprehensive service includes an assessment of encountered bugs and their resolution within the scope of my expertise."/>

         <Service loading={"lazy"} width={32} height={32} alt={"Agile dev Logo"}e src={"../../images/Logos/agile.png"} title={"Agile developer"} text="As an Agile developer, I am dedicated to delivering flexible, collaborative, and quality-focused solutions, establishing swift adaptation to evolving project requirements."/>
      </div>
 </section>
     )}
    </>

   
  )
}
export default Services