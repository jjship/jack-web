import React from 'react';

export const Home = () => {
  return (
    <div
      class="main-dsk l-wrapper l-h-wrapper js-wrapper"
      data-bg__mob="url(/images/BG_lights_mob_l.jpg)"
      data-bg__dsk="url(/images/BG_lights_dsk_l.jpg)"
      backgroundImage="/images/BG_lights_mob_l.jpg"
    >
      <div class="l-container l-h-container u-uppercase">
        <img
          src="/images/live_icon.png"
          alt="live icon"
          class="l-h-live_icon u-absolute"
        />
        <div class="l-h-flex_dsk">
          <div class="c-h-slogan l-h-slogan">
            <div class="c-h-slogan__today l-h-slogan__today">
              <p class="c-h-slogan__dzis l-h-slogan__dzis -f-motlow">dziś</p>
              <p class="c-h-slogan__zdarza l-h-slogan__zdarza -f-franklin-demi">
                zdarza się
              </p>
              <p class="c-h-slogan__tylko l-h-slogan__tylko -f-jasper-caps">
                tylko raz
              </p>
            </div>
            <div class="c-h-slogan__m_i_c l-h-slogan__m_i_c u-align__center">
              <img
                class="c-h-slogan__logo l-h-slogan__logo u-absolute"
                src="/images/navLogo.png"
                alt="Jack Daniel's logo"
                class="navLogo"
              />
              <p class="c-h-slogan__make l-h-slogan__make -f-jasper-caps">
                make it
              </p>
              <p class="c-h-slogan__count l-h-slogan__count -f-jasper-caps">
                count
              </p>
            </div>
          </div>
          <img
            src="/images/bottle_w_shadow.png"
            alt="Jack Daniels bottle"
            class="l-h-bottle_w_shadow"
          />
          <div class="l-copyform-container"></div>
        </div>
      </div>
    </div>
  );
};
