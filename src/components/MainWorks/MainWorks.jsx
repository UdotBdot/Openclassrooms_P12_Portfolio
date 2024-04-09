import React, { useState, useEffect } from 'react';
import './MainWorks.scss';
import SkeletonWorks from '../Skeletons/SkeletonWorks';
import Slider from '../../datas/Slider.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

function MainWorks() {
  const [projects, setProjects] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState('normal');

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(Slider);
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
        <div className='Article Article-side'>
          <div className='Works'>
            <div className='Slider border-radius'>
              {projects.map((project, index) => (
                <div
                  className='Slider__item'
                  key={project.sliderId}
                  style={{ display: index === currentSlideIndex ? 'flex' : 'none' }}
                >
                  <div className='Slider__items'>
                    <h3 className={direction === 'reverse' ? 'reverse' : ''}>
                      {project.sliderTitle}
                      <span>
                        <a target='_blank' href={project.sliderLink}>
                          <img width='24' height='24' className='Footer__logos' src='../../images/Logos/github_logo.webp' alt='GitHub Logo' />
                        </a>
                      </span>
                    </h3>
                    <p className={'center-align ' + (direction === 'reverse' ? 'reverse' : '')}>{project.sliderDescription}</p>
                    <div className='btn-display'>
                      <button aria-label='previous image bouton' className='btn1' onClick={goToPrevSlide}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                      </button>
                      <button aria-label='next image bouton' className='btn2' onClick={goToNextSlide}>
                        <FontAwesomeIcon icon={faCaretRight} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <img  className={`slider-image ${direction === 'reverse' ? 'reverse' : ''}`} width={662} height={480} src={project.sliderImg} alt={project.sliderTitle} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
}

export default MainWorks;
