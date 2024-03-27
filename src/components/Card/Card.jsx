import React from 'react';
import ReactCurvedText from 'react-curved-text';

import './Card.scss'
function Card() {


  return (
    <>
    <section className='Card'>
          <ReactCurvedText
          width={200} 
          height={200} 
          cx={100} 
          cy={100} 
          rx={80} 
          ry={80} 
          startOffset={0}
          reversed={true}
          text=' Frederic SIN - a.K.a -U.B. - Front-End Developer - React -'
          textProps={{ "style": { "fontSize": 18 } }} 
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={{ "className": "rotating-curved-text" }}
/>
        <p className='Card__xp'>1+</p>
        <p className='Card__text'>years of programming experience</p>
        <ul>
            <li>Obtention of Openclassrooms Associate Degree in April 2024.</li>
            <li>Over 15 solo projects made this year.</li>
        </ul>
    </section>
    </>
  )
}

export default Card
