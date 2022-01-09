import React from 'react';

function NavBar() {
  return (
    <div className='nav-container'>
      <nav>
        <ul>
          <li className='nav-item introduction'>
            <a href='#introduction'>
              <span className='text-1 align-center'>Introduction</span>
            </a>
          </li>
          <li className='nav-item solution'>
            <a href='#solution'>
              <span className='text-1 align-center'>Solution</span>
            </a>
          </li>
          <li className='nav-item rate-plan'>
            <a href='#rate-plan'>
              <span className='text-1 align-center'>Rate plan</span>
            </a>
          </li>
          <div className='separate-rectangle'></div>
          <li className='nav-item login'>
            <a href='#login'>
              <span className='text-1 align-center'>Login</span>
            </a>
          </li>
          <li className='nav-item apply-for-free-use'>
            <a href='#apply-for-free-use'>
              <span className='text-1 align-center'>Apply for free use</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
