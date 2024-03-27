import React from 'react'
import Skeletons from './main/Skeletons'

function SkeletonHeader() {
  return (
    <>
    <div className='Skeleton-header'>
      <Skeletons classes="Skeleton-header__text"/>
        <div className='Skeleton-header__logo'>
          <Skeletons classes="Skeleton-header__logos"/>
          <Skeletons classes="Skeleton-header__logos"/>
          <Skeletons classes="Skeleton-header__logos"/>
        </div>
    </div>
    </>
  )
}

export default SkeletonHeader