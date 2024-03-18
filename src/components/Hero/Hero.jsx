import React from 'react'
import './Hero.scss'

function Hero() {
  return (
    <>
    <article className='Hero'>
        <h1 className='Hero__h1'>Welcome to my Portfolio!</h1>
           <h2 className='Hero__h2'>I am Frederic SIN, a young Agile developer based in Alsace.</h2>
        <p className='Hero__p'>
           Welcome to my digital space where I regularly express myself through my projects, highlighting my ability to combine aesthetics and functionality to offer the best possible user experience.
        </p>
        <p className='Hero__p'>
          Thanks to my range of skills, I offer a diversity of services including debugging, SEO/Performance optimization, as well as the creation of web applications.
        </p>
        <p className='Hero__p'>
        Explore my portfolio to discover my vision of web development and together, let's transform your ideas into digital reality...
        </p>
    </article>
    </>
  )
}

export default Hero