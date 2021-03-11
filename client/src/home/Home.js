import React from 'react';
import { useWindowWidth } from '../Shared/useWindowWidth';
import { Form } from './Form';
import { Nav } from '../Shared/Nav';
const desktopBG = '/images/BG_lights_dsk_l.jpg';
const mobileBG = '/images/BG_lights_mob_l.jpg';

export const Home = () => {
  const imageUrl = useWindowWidth() >= 1000 ? desktopBG : mobileBG;

  return (
    <div
      className="main-dsk l-wrapper l-h-wrapper js-wrapper"
      data-bg__mob="url(/images/BG_lights_mob_l.jpg)"
      data-bg__dsk="url(/images/BG_lights_dsk_l.jpg)"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="l-container l-h-container u-uppercase">
        <img
          src="/images/live_icon.png"
          alt="live icon"
          className="l-h-live_icon u-absolute"
        />
        <div className="l-h-flex_dsk">
          <div className="c-h-slogan l-h-slogan">
            <div className="c-h-slogan__today l-h-slogan__today">
              <p className="c-h-slogan__dzis l-h-slogan__dzis -f-motlow">
                dziś
              </p>
              <p className="c-h-slogan__zdarza l-h-slogan__zdarza -f-franklin-demi">
                zdarza się
              </p>
              <p className="c-h-slogan__tylko l-h-slogan__tylko -f-jasper-caps">
                tylko raz
              </p>
            </div>
            <div className="c-h-slogan__m_i_c l-h-slogan__m_i_c u-align__center">
              <img
                className="c-h-slogan__logo l-h-slogan__logo u-absolute navLogo"
                src="/images/navLogo.png"
                alt="Jack Daniel's logo"
              />
              <p className="c-h-slogan__make l-h-slogan__make -f-jasper-caps">
                make it
              </p>
              <p className="c-h-slogan__count l-h-slogan__count -f-jasper-caps">
                count
              </p>
            </div>
          </div>
          <img
            src="/images/bottle_w_shadow.png"
            alt="Jack Daniels bottle"
            className="l-h-bottle_w_shadow"
          />
          <div className="l-copyform-container">
            <Form />
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};
