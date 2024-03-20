import React from 'react'
import './SkeletonHeader.scss'

function SkeletonHeader() {
  return (
    <>
    <div className='Header Skeleton-header'>
        <div className='Skeleton-header__text-anim pulse'></div>
        <div className='Skeleton-header__logos'>
            <div className='Skeleton-header__logo pulse'></div>
            <div className='Skeleton-header__logo pulse'></div>
        </div>
    </div>
    </>
  )
}

export default SkeletonHeader