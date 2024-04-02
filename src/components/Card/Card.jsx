import React from 'react';
import ReactCurvedText from 'react-curved-text';

import './Card.scss'
function Card() {


  return (
    <>
    <section className='Card'>
          <ReactCurvedText
          width={192} 
          height={192} 
          cx={96} 
          cy={96} 
          rx={64} 
          ry={64} 
          startOffset={0}
          reversed={true}
          text=' °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  °  ° °  ° '
          textProps={{ "style": { "fontSize": 14 } }} 
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={{ "className": "rotating-curved-text" }}/>  

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
