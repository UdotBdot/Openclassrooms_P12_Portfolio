import React, { useState, useEffect} from 'react';
import './TextAboutMe.scss'
import SkeletonAboutMe from '../Skeletons/SkeletonAboutMe'

function TextAboutMe() {

    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
  
      return () => clearTimeout(timer);
    }, []);

  return (
<>
    {isLoading ? (<div className='Article'><SkeletonAboutMe /></div>) : (
      <article className='Article'>
 <div className='About-me'>
        <h2>
            About Me
        </h2>
        <p>
           Welcome to those who have reached this point, your curiosity distinguishes you.
        </p>
        <p>
            As a front-end developer, I am deeply involved in the concept of "green code" writing sustainable and efficient code that minimizes environmental impact. In every piece of legislation I write, I strive to improve efficiency and reduce consumption, ensuring that digital solutions benefit our planet.
        </p>
        <p>
            I actively seek out opportunities to collaborate with organizations and businesses committed to environmental sustainability encouraged in technology. I'm dedicated to use my skills to deliver positive change in the digital landscape.   
        </p>
        <p>
            By incorporating thoses principles into my development projects, I aim to not only create unique experiences but also contribute to a more environmentally friendly ecosystem. Together, let us build a more sustainable future for generations to come. 
        </p>
    </div>
      </article>
       
    )}
    </>
  )
}

export default TextAboutMe