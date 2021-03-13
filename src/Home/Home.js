import React from 'react';
import { useWindowWidth } from '../Shared/useWindowWidth';
import { Nav } from '../Shared/Nav';
import { Footer } from '../Shared/Footer';
import { Form } from './Form';
import Animation from '../Animation/Animation';
const bottle = '/images/bottle_w_shadow';
const desktopBG = '/images/BG_lights_dsk_l.jpg';
const mobileBG = '/images/BG_lights_mob_l.jpg';

export const Home = () => {
  const imageUrl = useWindowWidth() >= 1000 ? desktopBG : mobileBG;

  return (
    <div
      className="main-dsk l-wrapper l-h-wrapper js-wrapper"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="l-container l-h-container u-uppercase">
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
          <div className="l-h-animation">
            {/* <Animation /> */}
            <img
              src={process.env.PUBLIC_URL + 'images/but.png'}
              alt="bottle"
              className="l-h-animation"
            />
          </div>
          <div className="l-copyform-container">
            <div className="js-testimony">
              <div className="c-copy l-copy">
                <p className="c-copy-mamy l-copy-mamy -f-motlow">mamy</p>
                <p className="c-copy-wielkie l-copy-wielkie -f-motlow">
                  wielkie plany!
                </p>
                <p className="c-copy-napelnijmy l-copy-napelnijmy -f-franklin-demi">
                  napełnijmy nimi
                </p>
                <p className="c-copy-butelke l-copy-butelke -f-motlow">
                  butelkę
                </p>
                <p className="c-copy-jacka l-copy-jacka -f-motlow">jack'a.</p>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Nav />
      <Footer />
    </div>
  );
};
