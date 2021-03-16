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
  const imageUrl = useWindowWidth() >= 720 ? desktopBG : mobileBG;

  const answer1 =
    'Nie, udział w konkursie nie wiąże się z żadną formą zapłaty lub koniecznością zakupu produktu i posiadania paragonu. Konkurs jest w pełni bezpłatny.';
  const answer2 =
    'Nie, nagrody są przyznawane w oparciu o decyzję Komisji Konkursowej, która ocenia zgłoszenia w oparciu o pomysłowość i kreatywność. Nagrody 1, 2 i 3 stopnia będą przyznawane drogą głosowania członków Komisji Konkursowej.';
  const answer3 =
    'Wszystkie treści podlegają weryfikacji przez Organizatora w terminie 7 dni roboczych od dnia wprowadzenia ich przez Uczestnika. Zabronione jest zamieszczanie przez Uczestników jakichkolwiek odpowiedzi (zdjęć, opisów zdjęć), które naruszają dobre obyczaje, obowiązujące prawo lub naruszają jakiekolwiek prawa osób trzecich, w szczególności wulgarnych, propagujących przemoc lub dyskryminujących. Zabronione jest umieszczanie przez Uczestników zdjęć ukazujących spożycie alkoholu, palenie papierosów oraz zażywanie innych substancji odurzających. Zgłoszenie zawierające takie treści będzie wykluczane z Konkursu, o czym Uczestnik Konkursu zostanie poinformowany. Uprawnienie do wykluczenia Uczestnika obejmuje również prawo do pozbawienia Nagród.';
  const answer4 =
    'konkurs trwa od startu o godzinie 0:00 (GTM+1) dnia 16.04.2021 do końca o godzinie 23:59 (GTM+1) dnia 04.06.2021.';
  const answer5 =
    'Wyniki konkursu z listą wybranych przez Komisję zwycięzców zostaną ogłoszone sukcesywnie co tydzień, w następujących datach: 30.04.2021; 7.05.2021; 14.05.2021; 21.05.2021; 28.05.2021; 4.06.2021; 11.06.2021. Powiadomienie o wygranej nastąpi dodatkowo w formie wiadomości e-mail w ciągu 3 dni roboczych od dnia ogłoszenia wyników Konkursu. Wysyłka nagród nastąpi najpóźniej do 14 dnia od ogłoszenia wyników.';

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
          <Item
            question="czy udział w konkursie jest płatny?"
            answer={answer1}
          />
          <Item question="czy można wybrać sobie nagrodę?" answer={answer2} />
          <Item
            question="czemu moderator nie zatwierdził mojego zgłoszenia?"
            answer={answer3}
          />
          <Item question="jak długo potrwa akcja?" answer={answer4} />
          <Item question="jak szybko dostanę nagrodę?" answer={answer5} />
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
