import React from 'react'
import './SkeletonNavbar.scss'

function SkeletonNavbar() {
  return (
    <>
    <div className='Skeleton-navbar'>
        <div className='Skeleton-navbar__element1 pulse'></div>
        <div className='Skeleton-navbar__element2 pulse'></div>
        <div className='Skeleton-navbar__element2 pulse'></div>
        <div className='Skeleton-navbar__element2 pulse'></div>
        <div className='Skeleton-navbar__element2 pulse'></div>
        <div className='Skeleton-navbar__bottom'>
            <div className='Skeleton-navbar__element2 pulse'></div>
            <div className='Skeleton-navbar__element2 pulse'></div>
        </div>

    </div>
    </>
  )
}

export default SkeletonNavbar