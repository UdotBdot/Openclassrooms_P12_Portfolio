import React from 'react'
import Skeletons from './main/Skeletons'

function Skeleton() {
  return (
    <>
    <div className='Skeleton-hero'>
      <div className='Skeleton-text'>
        <Skeletons classes="Skeleton-text__h1" />
        <Skeletons classes="Skeleton-text__h2" />
        <Skeletons classes="Skeleton-text__p" />
        <Skeletons classes="Skeleton-text__p" />
        <Skeletons classes="Skeleton-text__p" />
      </div>
      <div className='Skeleton-card'>
        <Skeletons classes="Skeleton-card__round" />
          <div className='Skeleton-card__bottom'>
            <Skeletons classes="Skeleton-card__square" />
            <Skeletons classes="Skeleton-card__square" />
          </div>
      </div>
    </div>

    </>
  )
}

export default Skeleton