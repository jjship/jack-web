import React from 'react';
import { useWindowWidth } from '../Shared/useWindowWidth';
import { NavMob } from '../Shared/NavMob';
import { NavDsk } from '../Shared/NavDsk';
import { Duration } from '../Shared/Duration';
import { Footer } from '../Shared/Footer';
import Carousel from './Carousel';
import zaslepka from './zaslepka.png';
const desktopBG = '/images/BG_lights_dsk_s.jpg';
const mobileBG = '/images/BG_lights_mob_s.jpg';

export const About = () => {
  const imageUrl = useWindowWidth() >= 1000 ? desktopBG : mobileBG;

  return (
    <div
      className="main-dsk l-wrapper l-a-wrapper js-wrapper"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <NavDsk />
      <div className="l-container l-a-container u-uppercase">
        <a href="/" className="c-close l-close">
          &#10005;
        </a>
        <div className="l-title c-title -f-jasper-caps">
          <p>dziś zdarza się tylko raz</p>
        </div>
        <div className="l-a-flex">
          <div className="l-a-flex-item l-a-grid-video">
            <img src={zaslepka} alt="film" className="l-a-zaslepka" />
          </div>
          <div className="l-a-flex-item l-a-flex__text -f-myriad-cond u-no-text-transform">
            <p className="l-a-p-jak c-a-p-jak">
              Z życia trzeba czerpać pełnymi szklankami. A sukcesy odpowiednio
              świętować. Najlepiej whiskey. Tennessee Whiskey.
            </p>
            <p className="l-a-p-moze c-a-p-moze">
              Od zawsze chcesz zrobić coś, ale brakowało Ci czasu lub odwagi?
              <br />
              Chcesz nauczyć się jeździć na desce? Masz ochotę na odważny kolor
              szminki? Prawo jazdy? Nowa fryzura?
              <br />
              Świetnie! Teraz jest ten moment.
              <br />
              Przestań się ograniczać i działaj!
            </p>
          </div>
          <div className="c-a-slogan-today l-a-slogan-container l-a-flex__text">
            <p className="c-a-slogan-dzis l-a-slogan-dzis -f-motlow">dziś</p>
            <p className="c-a-slogan-zdarza l-a-slogan-zdarza -f-franklin-demi">
              zdarza się
            </p>
            <p className="c-a-slogan-tylko l-a-slogan-tylko -f-jasper-caps">
              tylko raz
            </p>
          </div>
        </div>
        <Carousel />
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
