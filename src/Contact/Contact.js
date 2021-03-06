import React from 'react';
import { useWindowWidth } from '../Shared/useWindowWidth';
import { NavDsk } from '../Shared/NavDsk';
import { NavMob } from '../Shared/NavMob';
import { Duration } from '../Shared/Duration';
import { Footer } from '../Shared/Footer';
import { Form } from './Form';
import Messenger from './Messenger';
const desktopBG = '/images/BG_lights_dsk_s.jpg';
const mobileBG = '/images/BG_lights_mob_s.jpg';

export const Contact = () => {
  const imageUrl = useWindowWidth() >= 720 ? desktopBG : mobileBG;

  return (
    <div
      className="main-dsk l-wrapper l-c-wrapper js-wrapper"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <NavDsk />
      <NavMob />
      <div className="l-container l-c-container">
        <a href="/" className="c-close l-close">
          &#10005;
        </a>
        <Messenger />
        <Form />
      </div>
      <Duration />
      <Footer />
    </div>
  );
};
