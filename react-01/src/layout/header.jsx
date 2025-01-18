import { useRef, useState } from 'react';
import '../scss/layout/header.scss';

const Header = () => {

  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const resetNav = () => {
    setIsToggled(false);
  };

  return (
    <header className="header">
      <div className="inner">
        <h1 className="logo_header">
          <a
            href="/"
            className="btn_logo"
            onClick={resetNav}
          >home</a>
        </h1>

        <button
          type="button"
          className={`btn_nav ${isToggled ? 'is_active_nav' : ''}`}
          onClick={handleClick}
        >
          <span className="blind">menu</span>
        </button>
      </div>
    </header>
  )
};

export default Header;