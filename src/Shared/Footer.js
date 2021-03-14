import React from 'react';

export const Footer = () => {
  return (
    <footer className="l-wrapper">
      <div className="c-footer l-footer -f-myriad-cond u-text-center">
        <img
          alt="social icons"
          className="l-footer__socials c-footer__socials"
          src="/images/social_icons_SM.png"
        />
        <p>
          Pij odpowiedzialnie. www.pijodpowiedzialnie.pl
          <br />
          <a
            className="c-footer-link"
            href="https://legal.brown-forman.com/terms-of-use/polish"
          >
            Warunki korzystania |{' '}
          </a>
          <a
            className="c-footer-link"
            href="https://legal.brown-forman.com/privacy-policy/polish"
          >
            Polityka prywatności |{' '}
          </a>
          <a
            className="c-footer-link"
            href="https://legal.brown-forman.com/cookie-policy/polish"
          >
            Polityka cookies
          </a>
          <br />
          Jack Daniel's i Old No.7 są zarejestrowanymi znakami towarowymi. ©2021
          Jack Daniel's.
          <br />
          Wszystkie prawa zastrzeżone.
          <br />
          Aby dowiedzieć się więcej o odpowiedzialnym spożywaniu alkoholu,
          odwiedź pijodpowiedzialnie.pl and OurThinkingAboutDrinking.com
          Wszystkie inne znaki i nazwy należą do odpowiednich podmiotów.
          Materiał przeznaczony dla osób pełnoletnich. Nie przekazuj go osobom w
          wieku poniżej 18 lat.
        </p>
      </div>
    </footer>
  );
};
