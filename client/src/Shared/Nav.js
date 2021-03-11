import React from 'react';
import { Link } from 'react-router-dom';
import { useWindowWidth } from './useWindowWidth';

export const Nav = () => {
  const navClasses =
    useWindowWidth() >= 1000
      ? 'js-nav l-nav h-nav'
      : 'js-nav l-nav h-nav h-is__closed';

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
        >
          menu
          <img
            src="/images/arrow_white.png"
            alt="arrow"
            className="l-nav-arrow js-arrow"
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
