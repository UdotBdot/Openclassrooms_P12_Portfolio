import React from 'react';
import ReactCurvedText from 'react-curved-text';

import './Card.scss'
function Card() {


  return (
    <>
        <div className='Card'>
        <ReactCurvedText width={300}
            height={300}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={0}
            reversed={true}
            text=' Frederic SIN - a.K.a -U.B. - Front-End Developer - 11 -'
            textProps={{"style": {"fontSize": 24}}}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{"className": "rotating-curved-text"}} 
        />
        <p className='Card__xp'>1+</p>
        <p className='Card__text'>years of programming experience</p>
        <ul>
            <li>Obtention of Openclassrooms Associate Degree in April 2024.</li>
            <li>Over 15 solo projects made this year.</li>
        </ul>
    </div>
    </>
   
  )
}

export default Card
