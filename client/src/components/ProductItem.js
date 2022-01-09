import React from 'react';
import './productItem.css';

function ProductItem(props) {
  const { info } = props;

  return (
    <div className='product-item__container'>
      <img className='product-item__img' src={info.url} alt={info.title} />
      <h3 className='Text-Style-14'>{info.title}</h3>
      <div className='product-item__info-bar'>
        <p className='Text-Style-20'>{info.price}</p>
        <div className='product-item__heart'>
          <img src='/img/hearticon.png' alt='heart-icon' />
          <p>{info.tymCount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
