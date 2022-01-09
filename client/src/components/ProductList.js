import React from 'react';
import ProductItem from './ProductItem';
import './productList.css';
import SeeMoreButton from './SeeMoreButton';

function ProductList() {
  const productList = [
    {
      url: 'img/img-01.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-02.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-03.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-04.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-05.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-06.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-07.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-08.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-09.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-10.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-11.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-12.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-13.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-14.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-15.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-16.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-17.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-18.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-19.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-20.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-21.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-22.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-23.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-24.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
    {
      url: 'img/img-25.png',
      title: '[what happen] How to create',
      price: '2,500 won',
      tymCount: 236,
    },
  ];
  return (
    <div>
      <div className='product-list__container'>
        {productList.map((child, index) => {
          return <ProductItem info={child} key={child.url} />;
        })}
      </div>
      <div className='product-list__button'>
        <SeeMoreButton onClick={() => {}} />
      </div>
    </div>
  );
}

export default ProductList;
