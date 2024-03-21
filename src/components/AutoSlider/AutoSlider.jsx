import React, { useEffect, useState } from 'react';
import './AutoSlider.scss'; 

const AutoSlider = () => {
  const initialUrl = ['../../public/images/icons/html.png', '../../public/images/icons/css-3.png', '../../public/images/icons/sass.png', '../../public/images/icons/js.png', '../../public/images/icons/react.png', '../../public/images/icons/redux.png', '../../public/images/icons/jest.svg', '../../public/images/icons/figma.png', '../../public/images/icons/notion.png', '../../public/images/icons/mongodb.png', '../../public/images/icons/notion.png', '../../public/images/icons/docker.png'];
  const [Urls, setUrls] = useState(initialUrl);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const duplicatedWords = [...initialUrl, ...initialUrl];
      setUrls(duplicatedWords);
    }
  }, []); 

  return (
    <div className='Auto-slider-container'>
      <div className="Auto-slider">
      <h2>Front-End Tools</h2>
        <ul className="Auto-slider__word-list">
          {Urls.map((url, index) => (
            <li key={index}><img width={50} height={50} src ={url}/></li>
          ))}
        </ul>
      </div>
    </div>  
  );
};

export default AutoSlider;
