import React from 'react'

function Service({text, title, src, alt, width, height, loading}) {
  return (
   <>
    <div className='Services__items'>
        <img loading={loading} width={width} height={height} alt={alt} src={src}></img>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
   </>
  )
}

export default Service