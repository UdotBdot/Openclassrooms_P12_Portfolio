import React from 'react'
import Skeletons from './main/Skeletons'

function SkeletonNavbar() {
  return (
    <>
    <div className='Skeleton-navbar display-col'>
      <Skeletons classes="Skeleton-navbar__element" />
      <div className='Skeleton-navbar__top'>
        <Skeletons classes="Skeleton-navbar__element1 Skeleton-navbar__element"/>
        <Skeletons classes="Skeleton-navbar__element1 Skeleton-navbar__element"/>
        <Skeletons classes="Skeleton-navbar__element1 Skeleton-navbar__element"/>
        <Skeletons classes="Skeleton-navbar__element1 Skeleton-navbar__element"/>
      </div>
        <div className='Skeleton-navbar__bottom display-col'>
          <Skeletons classes="Skeleton-navbar__element"/>
          <Skeletons classes="Skeleton-navbar__element"/>
        </div>
    </div>
    </>
  )
}

export default SkeletonNavbar