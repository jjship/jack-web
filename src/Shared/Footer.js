import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="l-wrapper u-uppercase">
      <div className="c-footer l-footer -f-myriad-cond u-text-center">
        <div className="l-footer-socials">
          <a href="https://www.facebook.com/JackDanielsPolska/">
            <FontAwesomeIcon icon={faFacebookF} className="l-footer-social" />
          </a>
          <a href="https://www.instagram.com/jackdaniels_poland/">
            <FontAwesomeIcon icon={faInstagram} className="l-footer-social" />
          </a>
        </div>
        <p>
          Pij odpowiedzialnie.{' '}
          <a href="http://www.pijodpowiedzialnie.pl" className="c-footer-link">
            www.pijodpowiedzialnie.pl
          </a>
          <span style={{ fontWeight: '400' }}>
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
            Jack Daniel's i Old No.7 są zarejestrowanymi znakami towarowymi.
            ©2021 Jack Daniel's.
            <br />
            Wszystkie prawa zastrzeżone.
            <br />
            Aby dowiedzieć się więcej o odpowiedzialnym spożywaniu alkoholu,
            odwiedź{' '}
            <a
              href="http://www.pijodpowiedzialnie.pl"
              className="c-footer-link"
            >
              www.pijodpowiedzialnie.pl
            </a>{' '}
            and{' '}
            <a
              href="http://www.OurThinkingAboutDrinking.com"
              className="c-footer-link"
            >
              OurThinkingAboutDrinking.com
            </a>{' '}
            Wszystkie inne znaki i nazwy należą do odpowiednich podmiotów.
            Materiał przeznaczony dla osób pełnoletnich. Nie przekazuj go osobom
            w wieku poniżej 18 lat.
          </span>
        </p>
      </div>
    </footer>
  );
};
