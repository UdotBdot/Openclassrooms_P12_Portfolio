import React from 'react'
import './SkeletonNavbar.scss'

function SkeletonNavbar() {
  return (
    <>
    <div className='Skeleton-navbar'>
        <div className='Skeleton-navbar__element1 Skeleton-navbar__pulse'></div>
        <div className='Skeleton-navbar__element2 Skeleton-navbar__pulse'></div>
        <div className='Skeleton-navbar__element2 Skeleton-navbar__pulse'></div>
        <div className='Skeleton-navbar__element2 Skeleton-navbar__pulse'></div>
        <div className='Skeleton-navbar__element2 Skeleton-navbar__pulse'></div>
        <div className='Skeleton-navbar__bottom'>
            <div className='Skeleton-navbar__element2 Skeleton-navbar__pulse'></div>
            <div className='Skeleton-navbar__element2 Skeleton-navbar__pulse'></div>
        </div>

    </div>
    </>
  )
}

export default SkeletonNavbar