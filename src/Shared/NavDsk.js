import React from 'react';
import { Link } from 'react-router-dom';

export const NavDsk = () => {
  return (
    <div id="nav" className="js-nav l-nav l-nav__dsk u-uppercase">
      <Link to="/about" className="c-nav__btn -f-myriad-cond u-golden navAbout">
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
  );
};
