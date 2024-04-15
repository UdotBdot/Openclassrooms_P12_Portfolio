import React, { useEffect, useRef, useState } from 'react';
import './auto_slider.scss';
import Logos from '../../datas/logos.json';

const AutoSlider = () => {
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
      <section className='article'>
        {showSlider && (
          <>
            <div className='auto-slider-container'>
              <div className="scroller" data-speed="slow" ref={scrollerRef}>
                <ul className="tag-list scroller__inner">
                  {Logos.map((item, index) => (
                    <li className='border-radius' key={index}>
                      <img width={32} height={32} src={item.url} alt={item.alt} />
                    </li>
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
