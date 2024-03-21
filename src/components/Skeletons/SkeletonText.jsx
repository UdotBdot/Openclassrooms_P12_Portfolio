import React from 'react'
import Skeletons from './main/Skeletons'

function Skeleton() {
  return (
    <>
    <div className='Skeleton-text'>
      <Skeletons classes="Skeleton-text__h1" />
      <Skeletons classes="Skeleton-text__h2" />
      <Skeletons classes="Skeleton-text__p" />
      <Skeletons classes="Skeleton-text__p2" />
      <Skeletons classes="Skeleton-text__p3" />
    </div>
    </>
  )
}

export default Skeleton