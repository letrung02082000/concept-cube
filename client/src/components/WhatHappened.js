import React from 'react';
import SeeMoreButton from './SeeMoreButton';
import './whatHappened.css';

function WhatHappened() {
  return (
    <div className='what-happened__container'>
      <div className='what-happened__body'>
        <h3 className='what-happened__title title-extrabold-5'>
          What Happened
        </h3>
        <p className='what-happened__subtitle text-3'>
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </p>
        <SeeMoreButton />
        <img className='what-happened__video' src='img/video.png' alt='video' />
      </div>
      <img
        className='what-happened__video-object what-happened__video-object-01'
        src='img/video-object-01.png'
        alt='video-object-01'
      />
      <img
        className='what-happened__video-object what-happened__video-object-02'
        src='img/video-object-02.png'
        alt='video-object-02'
      />
      <img
        className='what-happened__video-object what-happened__video-object-03'
        src='img/video-object-03.png'
        alt='video-object-03'
      />
      <img
        className='what-happened__video-object what-happened__video-object-08'
        src='img/video-object-08.png'
        alt='video-object-08'
      />
      <img
        className='what-happened__video-object what-happened__video-object-09'
        src='img/video-object-09.png'
        alt='video-object-09'
      />
      <img
        className='what-happened__video-object what-happened__video-object-04'
        src='img/video-object-04.png'
        alt='video-object-04'
      />
      <img
        className='what-happened__video-object what-happened__video-object-05'
        src='img/video-object-05.png'
        alt='video-object-05'
      />
      <img
        className='what-happened__video-object what-happened__video-object-06'
        src='img/video-object-06.png'
        alt='video-object-06'
      />
      <img
        className='what-happened__video-object what-happened__video-object-07'
        src='img/video-object-07.png'
        alt='video-object-07'
      />
    </div>
  );
}

export default WhatHappened;
