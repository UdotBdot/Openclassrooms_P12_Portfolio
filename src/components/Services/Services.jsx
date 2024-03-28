import React from 'react'
import Service from '../Service/Service'
import './Services.scss'

function Services() {
  return (
    <section className='Article'>
         <h2 id="services">My Prestations</h2>
         <div className='Services'>
            <Service src={"../../images/Logos/build.webp"} title={"Web/App"} text="Crafting versatile, Mobile-First and Desktop-First Web/App solutions tailored for diverse objectives." />

            <Service src={"../../images/Logos/performance.webp"} title={"SEO/Performance"} text="Implementing SEO strategies and min/max Performances ensuring online visibility, and optimal experience."/>

            <Service src={"../../images/Logos/bugs.webp"} title={"Debug"} text="Facing challenges with your Web App? My comprehensive service includes an assessment of encountered bugs and their resolution within the scope of my expertise."/>

            <Service src={"../../images/Logos/agile.webp"} title={"Agile developer"} text="As an Agile developer, I am dedicated to delivering flexible, collaborative, and quality-focused solutions, establishing swift adaptation to evolving project requirements."/>
         </div>
    </section>
  )
}
export default Services