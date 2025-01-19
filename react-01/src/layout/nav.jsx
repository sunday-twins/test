import '../scss/layout/nav.scss';

import React from 'react';
import { Link } from 'react-router-dom';

// 서브 메뉴
const NAV_LIST_SUB = [
  [
    { to: '/sub1', text: '서브메뉴1' },
    { to: '/sub2', text: '서브메뉴2' },
    { to: '/sub3', text: '서브메뉴3' },
  ],
  [
    { to: '/sub4', text: '서브메뉴4' },
    { to: '/sub5', text: '서브메뉴5' },
    { to: '/sub6', text: '서브메뉴6' },
  ],
  [
    { to: '/sub7', text: '서브메뉴7' },
  ],
];



const Nav = ({ resetNav }) => {

  return (
    <nav className="area_nav">
      <div className="inner">
        <ul className="list_nav_main">
          {['Menu 1', 'Menu 2', 'Menu 3'].map((mainMenu, mainIdx) => (
            <li key={mainIdx} className="items_nav_main">
              <button
                type="button"
                className="btn_nav_main"
                onClick={resetNav}
                disabled>
                {mainMenu}
              </button>

              <ul className="list_nav_sub">
                {NAV_LIST_SUB[mainIdx].map((subMenu, subIdx) => (
                  <li key={subIdx} className="items_nav_sub">
                    <Link
                      to={subMenu.to}
                      className="btn_nav_sub"
                      onClick={resetNav}
                    >
                      {subMenu.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="items_nav_main">
            <Link
              to="/sub8"
              className="btn_nav_main"
              onClick={resetNav}
            >Menu 4
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Nav;
