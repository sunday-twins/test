// import '../scss/layout/nav.scss';

import React from 'react';
import { Link } from 'react-router-dom';

// 서브 메뉴
const NAV_LIST_SUB = [
  [
    { to: '/sub1', text: 'List' },
    { to: '/sub2', text: 'Accordion' },
    { to: '/sub3', text: '서브메뉴3' },
  ],
  [
    { to: '/sub4', text: 'Single' },
    { to: '/sub5', text: 'Double' },
  ],
  [
    { to: '/sub6', text: 'Image' },
    { to: '/sub7', text: 'Data' },
  ],
];



const Nav = ({ resetNav }) => {

  return (
    <nav className="area_nav fixed top-0 left-0 w-full h-full pt-20 bg-white box-border">
      {/* display: none => hidden */}
      <div className="inner">
        <ul className="list_nav_main grid gap-y-10 rid-cols-1 md:grid-cols-2 py-5">
          {['List', 'Table', 'Item'].map((mainMenu, mainIdx) => (
            <li key={mainIdx} className="items_nav_main">
              <button
                type="button"
                className="btn_nav_main py-2 text-xs text-gray-400"
                onClick={resetNav}
                disabled>
                {mainMenu}
              </button>

              <ul className="list_nav_sub">
                {NAV_LIST_SUB[mainIdx].map((subMenu, subIdx) => (
                  <li key={subIdx} className="items_nav_sub">
                    <Link
                      to={subMenu.to}
                      className="btn_nav_sub text-base text-black"
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
            >New Tab
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Nav;
