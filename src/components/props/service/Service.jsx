import React from 'react'

function Service({text, title, src, alt, width, height, loading, className}) {
  return (
   <>
    <div className='services__items border-radius margin-16'>
      <div className='top-display'>
        <img loading={loading} width={width} height={height} alt={alt} src={src}></img>
        <h3 className={className}>{title}</h3>
      </div>
        <p>{text}</p>
    </div>
   </>
  )
}

export default Service