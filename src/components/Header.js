import React from 'react';

function Header() {
  return (
    <>
        <header className="header">
            <img className="header__logo" src={require('../images/header.svg').default} alt="Лого в шапке"/>
        </header>
    </>
  );
}

export default Header;
