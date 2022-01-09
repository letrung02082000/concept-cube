import React from 'react';
import './seeMoreButton.css';

function SeeMoreButton(props) {
  return (
    <button
      className='see-more__button text-extrabold-2'
      type='button'
      onClick={props.onClick}
    >
      See More
    </button>
  );
}

export default SeeMoreButton;
