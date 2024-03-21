import React from 'react'
import Skeletons from './main/Skeletons'

function SkeletonCard() {
  return (
    <div className='Skeleton-card'>
      <Skeletons classes="Skeleton-card__round" />
        <div className='Skeleton-card__bottom'>
          <Skeletons classes="Skeleton-card__square" />
          <Skeletons classes="Skeleton-card__square" />
        </div>
    </div>
  )
}

export default SkeletonCard