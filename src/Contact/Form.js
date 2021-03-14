import React, { useState } from 'react';

export const Form = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  if (!sent) {
    return (
      <div>
        <div className="l-title c-title -f-jasper-caps">
          <p>napisz do jacka</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="c-c-form l-form l-c-form__dsk -f-myriad-cond"
        >
          <input
            type="text"
            className="l-c-form-input__dsk c-form-input l-form-input__1 c-form-input__dsk -f-myriad-cond u-uppercase"
            placeholder="wpisz imię"
          />
          <input
            type="email"
            className="l-c-form-input__dsk c-form-input l-form-input c-form-input__dsk -f-myriad-cond u-uppercase"
            placeholder="wpisz adres e-mail"
          />
          <div className="l-c-form-textarea__dsk">
            <textarea
              className="l-c-form-input__dsk c-c-textarea l-c-textarea c-form-textarea__dsk js-textarea -f-myriad-cond u-uppercase"
              name="statement"
              id="statement"
              rows="5"
              required="required"
              placeholder="treść wiadomości*"
            ></textarea>
          </div>
          <div className="l-c-form-buttons-container u-uppercase">
            <a href="/" className="c-c-form-zamknij l-c-form-zamknij">
              zamknij
            </a>
            <button className="c-btn__zamknij l-c-form-btn -f-myriad-cond">
              wyślij
            </button>
          </div>
        </form>
        <div className="c-c-disclaimer l-c-disclaimer -f-myriad-cond u-text-center">
          <p>
            Przyjmujesz do wiadomości, że Brown-Forman Corporation
            (BROWN-FORMAN) i inne firmy z grupy BROWN-FORMAN (których szczegóły
            są dostępne na żądanie) lub agenci, partnerzy lub licencjobiorcy
            BROWN-FORMAN będą przetwarzać Twoje dane osobowe zgodnie z Polityka
            prywatności BROWN-FORMAN
            https://legal.brown-forman.com/privacy-policy/polish, w
            uzasadnionych celach biznesowych, takich jak dostarczanie
            spersonalizowanych usług i treści, analizowanie i rozważanie
            sposobów ulepszania naszych usług i produktów, i odpowiadać na Twoje
            prośby. Twoje dane osobowe mogą być przekazywane do dowolnego kraju,
            w którym spółki z grupy BROWN-FORMAN lub nasi usługodawcy mają
            obiekty, a dane osobowe będą przechowywane zgodnie z obowiązującym
            prawem. Jeśli w przyszłości nie chcesz otrzymywać dalszych
            wiadomości od grupy BROWN-FORMAN i wolisz zostać usunięty z jej bazy
            danych lub jeśli chcesz poprawić swoje dane lub zmienić sposób
            otrzymywania od nas wiadomości, napisz na adres: privacy@bf.com.
          </p>
        </div>
        <img
          src="/images/bottle__big.png"
          alt="Jack Daniel's bottle"
          className="l-c-bottle"
        />
      </div>
    );
  }

  if (sent) {
    return (
      <div className="l-cs-flex-container">
        <div className="l-title c-title -f-jasper-caps">
          <p>napisz do jack'a</p>
        </div>
        <div className="c-cs-wiadomosc-container l-cs-wiadomosc-container -f-finlandia">
          <p>
            wiadomość została wysłana.
            <br />
            dziękujemy!
          </p>
        </div>
        <a href="/" className="c-btn__zamknij l-cs-btn__zamknij -f-myriad-cond">
          zamknij
        </a>
        <img
          className="l-cs-bottle"
          src="/images/bottle__big.png"
          alt="jack daniels bottle"
        />
      </div>
    );
  }
};
