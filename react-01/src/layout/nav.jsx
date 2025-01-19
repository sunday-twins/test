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



const btnNav = document.querySelector('.btn_nav');
const resetNav = () => {
  btnNav.classList.remove('is_active_nav');
};


const Nav = () => {

  return (
    <nav className="area_nav">
      <div className="inner">
        <ul className="list_nav_main">
          {['Menu 1', 'Menu 2', 'Menu 3'].map((mainMenu, mainIdx) => (
            <li key={mainIdx} className="items_nav_main">
              <BtnNavMain text={mainMenu} attr={{ disabled: 'true' }} />

              <ul className="list_nav_sub">
                {NAV_LIST_SUB[mainIdx].map((subMenu, subIdx) => (
                  <li key={subIdx} className="items_nav_sub">
                    <Link
                      to={subMenu.to}
                      className="btn_nav_sub"
                      onClick={() => {
                        resetNav();
                      }}
                    >
                      {subMenu.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="items_nav_main">
            <BtnNavMain
              TagType="a"
              text="Menu 4"
              href="/sub8"
              attr={{ target: '_blank', title: "새 창 이동" }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

// 메인 메뉴
const BtnNavMain = ({ TagType = 'button', text, href, attr }) => {

  return (
    <TagType
      {...(TagType === 'button' ? { type: 'button' } : { href })}
      className="btn_nav_main"
      {...attr}
      onClick={() => {
        resetNav();
      }}
    >
      {text}
    </TagType>
  );
};


export default Nav;
