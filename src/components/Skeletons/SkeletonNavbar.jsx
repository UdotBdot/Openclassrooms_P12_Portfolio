import React from 'react'
import Skeletons from './main/Skeletons'

function SkeletonNavbar() {
  return (
    <>
    <div className='Skeleton-navbar Navbar-position'>
      <Skeletons classes="Skeleton-navbar__element1" />
      <Skeletons classes="Skeleton-navbar__element2"/>
      <Skeletons classes="Skeleton-navbar__element2"/>
      <Skeletons classes="Skeleton-navbar__element2"/>
      <Skeletons classes="Skeleton-navbar__element2"/>
        <div className='Skeleton-navbar__bottom'>
          <Skeletons classes="Skeleton-navbar__element2"/>
          <Skeletons classes="Skeleton-navbar__element2"/>
        </div>
    </div>
    </>
  )
}

export default SkeletonNavbar