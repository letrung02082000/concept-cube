import React from 'react';
import './bestproduct.css';
import BestProductItem from './BestProductItem';

function BestProduct() {
  const urlsList = [
    'img/best-image-01.png',
    'img/best-image-02.png',
    'img/best-image-03.png',
  ];

  return (
    <div className='best-product__container'>
      <h2 className='best-product__title align-center title-bold-3'>
        Best Product
      </h2>
      <p className='best-product__description text-2 align-center'>
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </p>
      <div className='best-product__item-container'>
        {urlsList.map((child, index) => {
          return <BestProductItem url={child} key={child} />;
        })}
      </div>
    </div>
  );
}

export default BestProduct;
