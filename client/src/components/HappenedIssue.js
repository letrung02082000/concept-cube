import React from 'react';
import './happenedIssue.css';
import SeeMoreButton from './SeeMoreButton';

function HappenedIssue() {
  return (
    <div className='happen-issue__container'>
      <div className='happen-issue__header'>
        <h3 className='happen-issue__title title-bold-5'>Happened’s issue</h3>
        <p className='happen-issue__subtitle text-6'>
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <SeeMoreButton />
      </div>
      <div className='happen-issue__body'>
        <div className='happen-issue__item happen-issue__item-1'>
          <h4 className='title-extrabold-4'>whpn issue</h4>
          <img src='img/news-img-01.png' alt='newss-img03' />
        </div>
        <div className='happen-issue__item happen-issue__item-2'>
          <h4 className='title-extrabold-3 '>B Brand</h4>
          <img src='img/news-img-03.png' alt='newss-img03' />
        </div>
        <div className='happen-issue__item happen-issue__item-3'>
          <h4 className='title-extrabold-3 '>C Brand</h4>
          <img src='img/news-img-03.png' alt='newss-img03' />
        </div>
        <div className='happen-issue__item happen-issue__item-4'>
          <h4 className='title-extrabold-3 '>D Brand</h4>
          <img src='img/news-img-04.png' alt='newss-img03' />
        </div>
        <div className='happen-issue__item happen-issue__item-5'>
          <h4 className='title-extrabold-3 '>E Brand</h4>
          <img src='img/news-img-05.png' alt='newss-img03' />
        </div>
      </div>
    </div>
  );
}

export default HappenedIssue;
