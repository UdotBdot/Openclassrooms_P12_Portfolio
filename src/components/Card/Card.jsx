import React from 'react';
import ReactCurvedText from 'react-curved-text';
import './card.scss'

function Card() {


  return (
    <>
    <section className='card border-radius'>
          <ReactCurvedText
          width={192} 
          height={192} 
          cx={96} 
          cy={96} 
          rx={64} 
          ry={64} 
          startOffset={0}
          reversed={true}
          text='PRODUCTIVE — ENTHUSIAST — ATTENTIVE — '
          textProps={{ "style": { "fontSize": 16, "fontWeight":'bold' } }} 
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={{ "className": "rotating-curved-text" }}/>  

          <p className='card__xp'>1+</p>
        <p className='card__text'>years of programming experience</p>

       
        <ul>
            <li>Obtention of Openclassrooms Associate Degree in April 2024.</li>
            <li>Over 15 solo projects made this year.</li>
        </ul>
    </section>
    </>
  )
}

export default Card
