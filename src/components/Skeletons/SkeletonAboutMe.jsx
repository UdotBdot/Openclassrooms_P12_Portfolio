import React from 'react';
import Skeletons from './main/Skeletons';

function SkeletonAboutMe() {

  return (
    <div className='Skeleton-about-me'>
      <Skeletons classes="Skeleton-about-me__h2" />
      <Skeletons classes="Skeleton-about-me__text" />
      <Skeletons classes="Skeleton-about-me__text" />
      <Skeletons classes="Skeleton-about-me__text" />
      <Skeletons classes="Skeleton-about-me__text" />
    </div>
  );
}

export default SkeletonAboutMe;
