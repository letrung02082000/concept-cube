import React from 'react';
import DesktopNavBar from './DesktopNavBar';
import './header.css';
import MobileNavBar from './MobileNavBar';

function Header() {
  const [showMenu, setShowMenu] = React.useState(false);

  const onClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='box'>
      <div className='logo__container'>
        <img src='img/logo.svg' class='logo' alt='logo__logo-img' />
        <img
          src='img/caret-down-solid.svg'
          class='logo__triangle'
          id='toggle-menu-button'
          alt='triangle'
          onClick={onClick}
        />
      </div>
      {showMenu ? <MobileNavBar /> : null}
      <DesktopNavBar />
    </header>
  );
}

export default Header;
