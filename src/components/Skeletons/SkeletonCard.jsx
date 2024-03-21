import React from 'react'
import Skeletons from './main/Skeletons'

function SkeletonCard() {
  return (
    <div className='Skeleton-card'>
        <div className='Skeleton-card__round'></div>
        <div className='Skeleton-card__bottom'>
            <div className='Skeleton-card__square'></div>
            <div className='Skeleton-card__square'></div>
        </div>
    </div>
  )
}

export default SkeletonCard