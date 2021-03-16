import React from 'react';
import { NavMob } from '../Shared/NavMob';
import { NavDsk } from '../Shared/NavDsk';
import { Duration } from '../Shared/Duration';
import { Footer } from '../Shared/Footer';
import { Form } from './Form';
import Animation from './Animation/Animation';

export const Home = () => {
  return (
    <div className="l-h-flexcolumn__dsk">
      <NavDsk />
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
            <Animation />
          </div>
          <div className="l-copyform-container">
            <div className="js-testimony">
              <div className="c-copy l-copy">
                <p className="c-copy-napisz l-copy-napisz -f-motlow">Napisz</p>
                <p className="c-copy-co l-copy-co -f-franklin-demi">
                  co zawsze chciałes/aś
                </p>
                <p className="c-copy-chciales l-copy-chciales -f-franklin-demi">
                  chciałes/aś
                </p>
                <p className="c-copy-zrobic l-copy-zrobić -f-motlow">zrobić</p>
                <p className="c-copy-wygraj l-copy-wygraj -f-motlow">
                  i wygraj
                </p>
                <p className="c-copy-nagrody l-copy-nagrody -f-motlow">
                  nagrody
                </p>
              </div>
              {/* <div className="c-copy l-copy">
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
              </div> */}
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Duration />
      <NavMob />
      <Footer />
    </div>
  );
};
