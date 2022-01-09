import React from 'react';
import './bestProductItem.css';

function BestProductItem(props) {
  return (
    <div className='bp-item__container'>
      <img src={props.url} alt='bp-item' />
      <div>
        <h3 className='bp-item__title'>How to create mobile-optimized</h3>
        <button className='bp-item__button' type='button'>
          <img src='img/go-icon.png' alt='go-icon' />
        </button>
      </div>
    </div>
  );
}

export default BestProductItem;
