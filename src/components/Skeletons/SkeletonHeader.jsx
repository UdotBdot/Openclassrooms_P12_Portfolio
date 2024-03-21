import React from 'react'
import Skeletons from './main/Skeletons'

function SkeletonHeader() {
  return (
    <>
    <div className='Header Skeleton-header'>
      <Skeletons classes="Skeleton-header__text-anim"/>
      <Skeletons classes="Skeleton-header__about-me"/>
        <div className='Skeleton-header__logos'>
          <Skeletons classes="Skeleton-header__logo"/>
          <Skeletons classes="Skeleton-header__logo"/>
        </div>
    </div>
    </>
  )
}

export default SkeletonHeader