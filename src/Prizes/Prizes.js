import React from 'react';
import { useWindowWidth } from '../Shared/useWindowWidth';
import { Duration } from '../Shared/Duration';
import { NavDsk } from '../Shared/NavDsk';
import { NavMob } from '../Shared/NavMob';
import { Footer } from '../Shared/Footer';
const desktopBG = '/images/BG_lights_dsk_s.jpg';
const mobileBG = '/images/BG_lights_mob_s.jpg';

export const Prizes = () => {
  const imageUrl = useWindowWidth() >= 1000 ? desktopBG : mobileBG;

  return (
    <div
      className="main-dsk l-wrapper l-h-wrapper js-wrapper"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <NavDsk />
      <div className="l-container l-p-container u-uppercase">
        <a href="/" className="c-close l-close">
          &#10005;
        </a>
        <div className="l-title c-title -f-jasper-caps">
          <p>nagrody</p>
        </div>
        <div className="l-p-flex">
          <div className="l-p-flex-item l-p-flex-seven-container">
            <div className="l-p-innerflex-container">
              <p className="l-p-flex-qty__cash c-p-flex-qty__cash -f-jasper-caps">
                7 <span className="c-p-flex-x__cash">x</span>
              </p>
              <p className="l-p-flex-value c-p-flex-value -f-motlow">7 000</p>
              <p className="l-p-flex-zl c-p-flex-zl -f-motlow">zł</p>
              <p className="l-p-flex-na c-p-flex-na -f-myriad-cond u-golden">
                na realizację <br />
                marzenia
              </p>
            </div>
            <img
              src="/images/voucher_7000.png"
              alt="voucher na 7000 zł"
              className="l-p-flex-visualisation__seven"
            />
          </div>
          <div className="l-p-flex-item l-p-flex-three-container">
            <div className="l-p-innerflex-container">
              <p className="l-p-flex-qty__cash c-p-flex-qty__cash -f-jasper-caps">
                7 <span className="c-p-flex-x__cash">x</span>
              </p>
              <p className="l-p-flex-value c-p-flex-value -f-motlow">3 000</p>
              <p className="l-p-flex-zl c-p-flex-zl -f-motlow">zł</p>
              <p className="l-p-flex-na c-p-flex-na -f-myriad-cond u-golden">
                na realizację <br />
                marzenia
              </p>
            </div>
            <img
              src="/images/voucher_3000.png"
              alt="voucher na 3000 zł"
              className="l-p-flex-visualisation l-p-flex-visualisation__three"
            />
          </div>
          <div className="l-p-flex-item l-p-flex-instax-container">
            <div className="l-p-innerflex-container">
              <p className="l-p-flex-qty c-p-flex-qty -f-jasper-caps">
                140 <span className="c-p-flex-x">x</span>
              </p>
              <p className="l-p-flex-jack c-p-flex-jack -f-motlow">jack</p>
              <p className="l-p-flex-plus c-p-flex-plus -f-motlow">+</p>
              <p className="l-p-flex-instax c-p-flex-instax -f-motlow">
                instax
              </p>
            </div>
            <img
              src="/images/instax.png"
              alt="zdjęcie nagrody"
              className="l-p-flex-visualisation l-p-flex-visualisation__instax"
            />
          </div>
        </div>
        <a href="/" className="c-btn__zamknij l-p-btn__zamknij -f-myriad-cond">
          zamknij
        </a>
      </div>
      <Duration />
      <NavMob />
      <Footer />
    </div>
  );
};
