import React from 'react';
import './brandStory.css';
import SeeMoreButton from './SeeMoreButton';

function BrandStory() {
  return (
    <div className='brand-story__container'>
      <div className='brand-story__header'>
        <h3 className='brand-story__title title-bold-2'>Brand Story</h3>
        <p className='brand-story__subtitle text-4'>
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
      </div>
      <div className='brand-story__body'>
        <div className='brand-story-body__line'>
          <div></div>
        </div>
        <div className='brand-story-body__container'>
          <div className='brand-story__left'>
            <img src='/img/img.png' alt='brand-story-img' />
          </div>
          <div className='brand-story__right'>
            <h4 className='title-extrabold-6'>What Happened’s Brand story</h4>
            <p className='text-3'>
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.{' '}
            </p>
            <div className='brand-story__button'>
              <SeeMoreButton />
            </div>
          </div>
        </div>
      </div>
      <img
        className='brand-story__object brand-story__object1'
        src='img/object-01.png'
        alt='object-01'
      />
      <img
        className='brand-story__object brand-story__object2'
        src='img/object-02.png'
        alt='object-01'
      />
      <img
        className='brand-story__object brand-story__object3'
        src='img/object-03.png'
        alt='object-01'
      />
      <img
        className='brand-story__object brand-story__object4'
        src='img/object-04.png'
        alt='object-01'
      />
      <img
        className='brand-story__object brand-story__object5'
        src='img/object-05.png'
        alt='object-01'
      />
      <img
        className='brand-story__object brand-story__object6'
        src='img/object-06.png'
        alt='object-01'
      />
      <img
        className='brand-story__object brand-story__object7'
        src='img/object-07.png'
        alt='object-01'
      />
    </div>
  );
}

export default BrandStory;
