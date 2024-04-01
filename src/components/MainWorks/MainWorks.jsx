import React, { useState, useEffect } from 'react';
import './MainWorks.scss';
import SkeletonWorks from '../Skeletons/SkeletonWorks';
import Slider from '../../datas/Slider.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'

function MainWorks() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState("normal")

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(Slider);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setDirection('normal');
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setDirection('reverse');
  };

  return (
    <>
      {isLoading ? (
        <SkeletonWorks />
      ) : (
        <div className='Article Article-side'>
          <div className='Works'>
            <div className='Slider'>
              {projects.map((project, index) => (
                <div
                  className='Slider__item'
                  key={project.sliderId}
                  style={{ display: index === currentSlideIndex ? 'flex' : 'none' }}
                >
                  <div className='Slider__items'>
                    <h3 className={direction === 'reverse' ? 'reverse' : ''}>{project.sliderTitle}</h3>
                    <p className={'center-align ' + (direction === 'reverse' ? 'reverse' : '')}>{project.sliderDescription}</p>
                    <div className='btn-display'>
                      <button className='btn1' onClick={goToPrevSlide}><FontAwesomeIcon icon={faCaretLeft} /></button>
                      <button className='btn2' onClick={goToNextSlide}><FontAwesomeIcon icon={faCaretRight} /></button>
                    </div>
                  </div>
                  <a target='_blank' href={project.sliderLink}>
                    <img className={direction === 'reverse' ? 'reverse' : ''} width={740} height={480} src={project.sliderImg} alt={project.sliderTitle} />
                  </a>
                </div>
              ))}
            </div>
            <div>
              <p>
                Here are the two projects that I have chosen to present in order to validate my Front-End Developer
                training at Openclassrooms. I consider these projects to be of significant importance for several
                reasons:
              </p>
              <p>
                Firstly, the Sophie Bluel project served as my introduction to the realm of JavaScript, wherein I
                swiftly comprehended the intricate yet potent nature of this language. I realized that mastery of
                JavaScript is indispensable for becoming a proficient developer. Throughout the project, I acquired
                foundational skills such as the creation of sliders and category filters. If HTML & CSS were my initial
                steps, then JavaScript undoubtedly propelled me forward.
              </p>
              <p>
                Secondly, the Nina Carducci project provided me with invaluable insights into the best practices for
                website optimization, covering areas such as image formatting, SEO, and accessibility. Additionally, it
                introduced me to tools such as Google's Lighthouse Audit. As an individual who consistently pays close
                attention to detail, it was only natural for me to select this project.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainWorks;
