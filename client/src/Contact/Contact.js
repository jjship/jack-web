import React from 'react';
import { useWindowWidth } from '../Shared/useWindowWidth';
import { Nav } from '../Shared/Nav';
import { Footer } from '../Shared/Footer';
import { Form } from './Form';
const desktopBG = '/images/BG_lights_dsk_s.jpg';
const mobileBG = '/images/BG_lights_mob_s.jpg';

export const Contact = () => {
  const imageUrl = useWindowWidth() >= 1000 ? desktopBG : mobileBG;

  return (
    <div
      className="main-dsk l-wrapper l-c-wrapper js-wrapper"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="l-container l-c-container">
        <a href="/" className="c-close l-close">
          &#10005;
        </a>
        <Form />
      </div>
      <Nav />
      <Footer />
    </div>
  );
};
