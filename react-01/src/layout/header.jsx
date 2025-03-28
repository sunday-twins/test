import { useState } from 'react';
import '../scss/layout/header.scss';

const Header = ({ isActiveNav, toggleNav }) => {

  return (
    <header className="header fixed top-0 left-0 w-full h-20 px-3 border-b bg-white">
      <div className="flex justify-between items-center w-full h-full">
        <h1 className="logo_header">
          <a
            href="/test"
            className="btn_logo"
          >home</a>
        </h1>

        <button
          type="button"
          className={`btn_nav flex-none w-[2.5rem] h-[2.5rem]${isActiveNav ? ' is_active_nav' : ''}`}
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