import React, { useState, useEffect } from 'react';
import './MainWorks.scss';
import img1 from '../../assets/Works/Bluel-Wall.png';
import img2 from '../../assets/Works/Nina-Wall.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import SkeletonWorks from '../Skeletons/SkeletonWorks';


function MainWorks() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const images = [img1, img2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
    {isLoading ? (<SkeletonWorks />) : (
      <div className='Article Article-side'>
      <div className='Works'>
        <div className='slider'>
          <a target='_blank' href='https://github.com/UdotBdot?tab=repositories'>
            <img width={972} height={480} src={images[currentImageIndex]} alt={`Work ${currentImageIndex + 1}`} />
          </a>
          <div className='btn-display'>
            <button aria-label='Slider previous image' className='btn1 btn-style' onClick={prevSlide}> <FontAwesomeIcon icon={faArrowLeft}/> </button>
            <button aria-label='Slider next image' className='btn2 btn-style' onClick={nextSlide}> <FontAwesomeIcon icon={faArrowRight}/></button>
          </div>

        </div>
        <div>
          <p>
            Here are the two projects that I have chosen to present in order to validate my Front-End Developer training at Openclassrooms. I consider these projects to be of significant importance for several reasons:
          </p>
          <p>
            Firstly, the Sophie Bluel project served as my introduction to the realm of JavaScript, wherein I swiftly comprehended the intricate yet potent nature of this language. I realized that mastery of JavaScript is indispensable for becoming a proficient developer. Throughout the project, I acquired foundational skills such as the creation of sliders and category filters. If HTML & CSS were my initial steps, then JavaScript undoubtedly propelled me forward.
          </p>
          <p>
            Secondly, the Nina Carducci project provided me with invaluable insights into the best practices for website optimization, covering areas such as image formatting, SEO, and accessibility. Additionally, it introduced me to tools such as Google's Lighthouse Audit. As an individual who consistently pays close attention to detail, it was only natural for me to select this project.
          </p>
        </div>
      </div>
    </div>
    
      
    )}
    
    </>
  );
}

export default MainWorks;
