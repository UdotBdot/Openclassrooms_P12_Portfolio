import React from 'react'
import Skeletons from './main/Skeletons'

function SkeletonWorks() {
  return (
    <>
    <div className='Skeleton-works'>
      <Skeletons classes="Skeleton-works__img" />
      <Skeletons classes="Skeleton-works__p" />
      <Skeletons classes="Skeleton-works__p" />
      <Skeletons classes="Skeleton-works__p" />
    </div>

    </>
  )
}

export default SkeletonWorks