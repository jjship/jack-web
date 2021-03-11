import React from 'react';

export const Footer = () => {
  return (
    <footer className="l-wrapper">
      <div className="c-footer l-footer -f-myriad-cond u-text-center">
        <img
          alt="social icons"
          className="l-footer__socials c-footer__socials"
          src="/images/social_icons_SM.png"
        />
        <p>
          JACK DANIEL DISTILLERY LYNCHBURG, TENNESSEE
          <br />
          JACK DANIEL’S, OLD NO. 7, TENNESSEE FIRE, TENNESSEE HONEY, GENTLEMAN
          JACK, AND NO. 27 GOLD
          <br />
          ARE REGISTERED TRADEMARKS OF JACK DANIEL'S PROPERTIES, INC. © 2020.
          <br />
          ALL RIGHTS RESERVED. ALL OTHER TRADEMARKS AND TRADE NAMES ARE
          PROPERTIES OF THEIR RESPECTIVE OWNERS.
          <br />
          TO FIND OUT MORE ABOUT RESPONSIBLE CONSUMPTION, VISIT
          RESPONSIBILITY.ORG AND OURTHINKINGABOUTDRINKING.COM
          <br />
          PLEASE DO NOT SHARE OR FORWARD WITH ANYONE UNDER THE LEGAL DRINKING
          AGE.
        </p>
      </div>
    </footer>
  );
};
