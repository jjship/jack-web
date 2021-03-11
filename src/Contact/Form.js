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
            Poprzez wysłanie zapytania wyraża Pan/Pani zgodę na przetwarzanie
            przez CEDC International Sp. z o.o. z siedzibą w Obornikach moich
            danych osobowych w zakresie wskazanym w formularzu kontaktowym w
            celu udzielenia odpowiedzi na przesłane zapytaniem. Przysługuje
            Pani/Panu prawo do wycofania zgody jednakże wycofanie zgody nie ma
            wpływu na zgodność z prawem przetwarzania, którego dokonano na jej
            podstawie przed wycofaniem. Szczegóły wycofania zgody oraz pełna
            treść klauzuli informacyjnej, zgodnie z Art. 13 RODO, znajdują się w
            Regulaminie*
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
