import React from 'react';
import { useWindowWidth } from '../Shared/useWindowWidth';
import { NavDsk } from '../Shared/NavDsk';
import { NavMob } from '../Shared/NavMob';
import { Duration } from '../Shared/Duration';
import { Footer } from '../Shared/Footer';
import { Item } from './Item';
const desktopBG = '/images/BG_lights_dsk_s.jpg';
const mobileBG = '/images/BG_lights_mob_s.jpg';

export const Faq = () => {
  const imageUrl = useWindowWidth() >= 1000 ? desktopBG : mobileBG;

  return (
    <div
      className="main-dsk l-wrapper l-h-wrapper js-wrapper"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <NavDsk />
      <div className="l-container l-faq-container">
        <a href="/" className="c-close l-close">
          &#10005;
        </a>
        <div className="l-title c-title -f-jasper-caps">
          <p>najczęściej zadawane pytania</p>
        </div>
        <div className="l-faq-flex">
          <Item text="czy udział w konkursie jest płatny?" />
          <Item text="czy można wybrać sobie nagrodę?" />
          <Item text="czemu moderator nie zatwierdził mojego wyznania?" />
          <Item text="czemu moderator nie zatwierdził mojego wyznania?" />
          <Item text="jak długo potrwa akcja?" />
          <Item text="jak szybko dostanę nagrodę?" />
        </div>
        <a
          href="/"
          className="c-btn__zamknij l-faq-btn__zamknij -f-myriad-cond"
        >
          zamknij
        </a>
        <img
          src="/images/bottle.png"
          alt="Jack Daniel's bottle"
          className="l-faq-bottle"
        />
      </div>
      <Duration />
      <NavMob />
      <Footer />
    </div>
  );
};
