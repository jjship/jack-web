import React from 'react';
import { useWindowWidth } from '../Shared/useWindowWidth';
import { Nav } from '../Shared/Nav';
import { Footer } from '../Shared/Footer';
const desktopBG = '/images/BG_lights_dsk_s.jpg';
const mobileBG = '/images/BG_lights_mob_s.jpg';

export const About = () => {
  const imageUrl = useWindowWidth() >= 1000 ? desktopBG : mobileBG;

  return (
    <div
      class="main-dsk l-wrapper l-a-wrapper js-wrapper"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div class="l-container l-a-container u-uppercase">
        <a href="/" class="c-close l-close">
          &#10005;
        </a>
        <div class="l-title c-title -f-jasper-caps">
          <p>
            O Jack’u Danielu
            <br /> i Jack’u Daniel’sie
          </p>
        </div>
        <div class="l-a-flex">
          <div class="l-a-flex-item l-a-grid-video">
            <img src="/images/zaslepka.png" alt="film" class="l-a-zaslepka" />
          </div>
          <div class="l-a-flex-item l-a-flex__text -f-myriad-cond u-golden u-no-text-transform">
            <p class="l-a-p-jak c-a-p-jak">
              Jak się bardzo chce, to się musi udać! Jack Daniel chciał
              wyprodukować najlepszą whiskey na świecie. I udało się! Jak?
            </p>
            <p class="l-a-p-moze c-a-p-moze">
              Może to woda, której źródło bije w jaskini, może to dębowe beczki
              używane tylko raz, może to szczęśliwa liczba „7”, która zdobi
              etykietę od 150 lat tak samo kwadratowej butelki. To na pewno
              odwaga Jack’a Deniela. Odwaga do sięgania po nowe i do sięgania po
              więcej. Dlatego to do odważnych Jack należy. Oni wiedzą to co
              wiedział Jack Daniel:
            </p>
          </div>
          <div class="c-a-slogan-today l-a-slogan-container l-a-flex__text">
            <p class="c-a-slogan-dzis l-a-slogan-dzis -f-motlow">dziś</p>
            <p class="c-a-slogan-zdarza l-a-slogan-zdarza -f-franklin-demi">
              zdarza się
            </p>
            <p class="c-a-slogan-tylko l-a-slogan-tylko -f-jasper-caps">
              tylko raz
            </p>
          </div>
        </div>
        <a href="/" class="c-btn__zamknij l-p-btn__zamknij -f-myriad-cond">
          zamknij
        </a>
      </div>
      <Nav />
      <Footer />
    </div>
  );
};
