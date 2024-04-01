import React from 'react'

function Service({text, title, src, alt, width, height, loading}) {
  return (
   <>
    <div className='Services__items'>
      <div className='top-display'>
        <img loading={loading} width={width} height={height} alt={alt} src={src}></img>
        <h3>{title}</h3>
      </div>
        <p>{text}</p>
    </div>
   </>
  )
}

export default Service