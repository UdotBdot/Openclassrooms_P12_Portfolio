import React from 'react'
import './SkeletonText.scss'

function Skeleton() {
  return (
    <>
    <div className='Skeleton-text'>
    <h2 className='Skeleton-text__h1 Skeleton-text__pulse'></h2>
    <h3 className='Skeleton-text__h2 Skeleton-text__pulse'></h3>
    <p className='Skeleton-text__p Skeleton-text__pulse'></p>
    <p className='Skeleton-text__p2 Skeleton-text__pulse'></p>
    <p className='Skeleton-text__p3 Skeleton-text__pulse'></p>
    </div>
    </>
  )
}

export default Skeleton