import React from 'react';
import Skeleton from '../Skeletons/SkeletonText';
import './Hero.scss';
import Card from '../Card/Card';

function Hero() {
  return (
    <>
      <section className='Article-hero Article'>
        <div className='Hero'>
          <h2 className='Hero__h2'>Welcome to my Portfolio!</h2>
          <h3 className='Hero__h3 margin-16'>I am Frederic SIN, a young Agile developer based in Alsace.</h3>
          <p className='Hero__p'>
            Here is my digital space where I regularly express myself through my projects, highlighting my ability to combine aesthetics and functionality to offer the best possible user experience.
          </p>
          <p className='Hero__p'>
            Thanks to my range of skills, I offer a diversity of services including debugging, SEO/Performance optimization, as well as the creation of web applications.
          </p>
          <p className='Hero__p'>
            Explore my portfolio to discover my vision of web development and together, let's transform your ideas into digital reality...
          </p>
        </div>
        <Card />
      </section>
    </>
  );
}

export default Hero;
