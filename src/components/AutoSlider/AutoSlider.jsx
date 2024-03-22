import React, { useEffect, useRef, useState } from 'react';
import './AutoSlider.scss'; 

const AutoSlider = () => {
  const initialUrl = ['../../images/html.png', '../../images/css-3.png', '../../images/sass.png', '../../images/js.png', '../../images/react.png', '../../images/redux.png', '../../images/jest.svg', '../../images/figma.png', '../../images/notion.png', '../../images/mongodb.png', '../../images/docker.png'];
  const [Urls, setUrls] = useState(initialUrl);
  const scrollerRef = useRef();

  useEffect(() => {
    const scrollerElement = scrollerRef.current;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
    
  }, []); 

  return (
    <div className='Auto-slider-container'>
      <div className="scroller" data-speed="slow" ref={scrollerRef}>
        <h2>Front-End Tools</h2>
        <ul className="tag-list scroller__inner">
          {Urls.map((url, index) => (
            <li key={index}><img width={50} height={50} src={url} alt={`Front-end Tool ${index}`} /></li>
          ))}
        </ul>
      </div>
    </div>  
  );
};

export default AutoSlider;
