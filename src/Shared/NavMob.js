import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWindowWidth } from './useWindowWidth';

export const NavMob = () => {
  const [navClosed, setNavClosed] = useState(false);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    windowWidth >= 1000 ? setNavClosed(false) : setNavClosed(true);
  }, [windowWidth]);

  const handleToggle = () => {
    navClosed ? setNavClosed(false) : setNavClosed(true);
  };

  const btnTxt = navClosed ? 'menu' : 'mniej';

  const arrClasses = navClosed
    ? 'l-nav-arrow js-arrow'
    : 'l-nav-arrow js-arrow h-is__up';

  const navClasses = navClosed
    ? 'js-nav l-nav h-nav h-is__closed'
    : 'js-nav l-nav h-nav';

  return (
    <div className="c-nav l-nav__mob">
      <button
        className="c-nav__btn -f-myriad-cond u-white js-toggle"
        data-text="mniej"
        onClick={() => handleToggle()}
      >
        {btnTxt}
        <img src="/images/arrow_white.png" alt="arrow" className={arrClasses} />
      </button>
      <div id="nav" className={navClasses}>
        <Link
          to="/about"
          className="c-nav__btn -f-myriad-cond u-golden navAbout"
        >
          od jacka
        </Link>
        <Link
          to="/prizes"
          className="c-nav__btn -f-myriad-cond u-golden navPrizes"
        >
          nagrody
        </Link>
        <Link to="/faq" className="c-nav__btn -f-myriad-cond u-golden faq">
          faq
        </Link>
        <Link
          to="/files/regulations.pdf"
          target="_blank"
          className="c-nav__btn -f-myriad-cond u-golden navRegulations"
        >
          regulamin akcji
        </Link>
        <Link
          to="/contact"
          className="c-nav__btn -f-myriad-cond u-golden navContact"
        >
          kontakt
        </Link>
      </div>
    </div>
  );
};
