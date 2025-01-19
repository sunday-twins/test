import { useState } from 'react';
import '../scss/layout/header.scss';

const Header = ({ isActiveNav, toggleNav }) => {

  return (
    <header className="header">
      <div className="inner">
        <h1 className="logo_header">
          <a
            href="/"
            className="btn_logo"
          >home</a>
        </h1>

        <button
          type="button"
          className={`btn_nav ${isActiveNav ? 'is_active_nav' : ''}`}
          onClick={toggleNav}
        >
          <span className="blind">
            {isActiveNav ? 'Close Menu' : 'Open Menu'}
            menu
          </span>
        </button>
      </div>
    </header>
  )
};

export default Header;