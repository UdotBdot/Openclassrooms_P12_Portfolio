import React from 'react'

function Service({text,title, src}) {
  return (
   <>
    <div className='Services__items'>
        <img src={src}></img>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
   </>
  )
}

export default Service