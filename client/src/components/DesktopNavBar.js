import React from 'react';
import './desktopNavBar.css';

function DesktopNavBar() {
  return (
    <div className='d-nav-container'>
      <nav>
        <ul>
          <li className='d-nav-item introduction'>
            <a href='#introduction'>
              <span className='text-1 align-center uppercase'>
                Introduction
              </span>
            </a>
          </li>
          <li className='d-nav-item solution'>
            <a href='#solution'>
              <span className='text-1 align-center uppercase'>Solution</span>
            </a>
          </li>
          <li className='d-nav-item rate-plan'>
            <a href='#rate-plan'>
              <span className='text-1 align-center uppercase'>Rate plan</span>
            </a>
          </li>
          <div className='d-separate-rectangle'></div>
          <li className='d-nav-item login'>
            <a href='#login'>
              <span className='text-1 align-center uppercase'>Login</span>
            </a>
          </li>
          <li className='d-nav-item apply-for-free-use'>
            <a href='#apply-for-free-use'>
              <span className='text-1 align-center uppercase'>
                Apply for free use
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DesktopNavBar;
