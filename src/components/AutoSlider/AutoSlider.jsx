import React, { useEffect, useRef, useState } from 'react';
import './AutoSlider.scss';

const AutoSlider = () => {

  const initialUrl = ['../../images/Logos/html.webp', '../../images/Logos/css-3.webp', '../../images/Logos/sass.webp', '../../images/Logos/js.webp', '../../images/Logos/react.webp', '../../images/Logos/redux.webp', '../../images/Logos/jest.svg', '../../images/Logos/figma.webp', '../../images/Logos/notion.webp', '../../images/Logos/mongodb.webp', '../../images/Logos/docker.webp'];
  const [Urls, setUrls] = useState(initialUrl);
  const [showSlider, setShowSlider] = useState(false);
  const scrollerRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlider(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scrollerElement = scrollerRef.current;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && showSlider) {
      addAnimation(scrollerElement);
    }

    function addAnimation(scrollerElement) {
      if (!scrollerElement) return;

      scrollerElement.setAttribute("data-animated", true);

      const scrollerInner = scrollerElement.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }

  }, [showSlider]);

  return (
    <>
      <section className='Article'>
        {showSlider && (
          <>
            <h2 className='test'>Front-End Tools</h2>
            <div className='Auto-slider-container'>
              <div className="scroller" data-speed="slow" ref={scrollerRef}>
                <ul className="tag-list scroller__inner">
                  {Urls.map((url, index) => (
                    <li key={index}><img width={50} height={50} src={url} alt={`Front-end Tool ${index}`} /></li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default AutoSlider;
