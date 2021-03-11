import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [navClosed, setNavClosed] = useState(false);

  useEffect(() => {
    function handleResize() {
      window.innerWidth >= 1000 ? setNavClosed(false) : setNavClosed(true);
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

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
    <div>
      <div className="c-akcja l-akcja u-golden-bottom">
        <p className="-f-myriad-cond u-golden-92 u-uppercase">
          akcja trwa od XX marca 2021 r. do zapełnienia butelki.
        </p>
      </div>
      <div className="c-nav">
        <button
          className="c-nav__btn -f-myriad-cond u-white js-toggle"
          data-text="mniej"
          onClick={() => handleToggle()}
        >
          {btnTxt}
          <img
            src="/images/arrow_white.png"
            alt="arrow"
            className={arrClasses}
          />
        </button>
        <div id="nav" className={navClasses}>
          <Link
            to="/privacy"
            className="c-nav__btn c-nav__privacy -f-myriad-cond u-golden"
            id="hide"
          >
            polityka prywatności i cookies
          </Link>
          <Link
            to="/regulations"
            className="c-nav__btn -f-myriad-cond u-golden navRegulations"
          >
            regulamin akcji
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
            to="/about"
            className="c-nav__btn -f-myriad-cond u-golden navAbout"
          >
            od jacka
          </Link>
          <Link
            to="/contact"
            className="c-nav__btn -f-myriad-cond u-golden navContact"
          >
            kontakt
          </Link>
        </div>
      </div>
    </div>
  );
};
