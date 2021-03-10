import React, { useState } from 'react';

export const Form = () => {
  const [statement, setStatement] = useState(false);
  console.log(statement);
  const [sent, setSent] = useState(false);

  const handleStatementSubmit = (e) => {
    e.preventDefault();
    setStatement(true);
  };

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleCloseClick = () => {
    setStatement(false);
    setSent(false);
  };

  if (!statement && !sent) {
    return (
      <div className="js-testimony">
        <div className="c-copy l-copy">
          <p className="c-copy-mamy l-copy-mamy -f-motlow">mamy</p>
          <p className="c-copy-wielkie l-copy-wielkie -f-motlow">
            wielkie plany!
          </p>
          <p className="c-copy-napelnijmy l-copy-napelnijmy -f-franklin-demi">
            napełnijmy nimi
          </p>
          <p className="c-copy-butelke l-copy-butelke -f-motlow">butelkę</p>
          <p className="c-copy-jacka l-copy-jacka -f-motlow">jack'a.</p>
        </div>
        <form
          onSubmit={handleStatementSubmit}
          className="l-form c-h-form l-h-form__dsk -f-myriad-cond"
        >
          <label
            className="u-text-transform-none l-form-label__masz c-form-label__masz -f-myriad-light"
            htmlFor="statement"
          >
            masz <span>280</span> znaków
          </label>
          <textarea
            className="c-form-textarea c-form-input__dsk l-form-textarea -f-myriad-cond u-uppercase js-h-textarea"
            name="statement"
            id="statement"
            rows="4"
            required="required"
            placeholder="Napisz co zawsze chciałeś zrobić&#10;i dlaczego właśnie to, i wygraj kasę&#10;na realizację swojego wielkiego planu!"
          ></textarea>
          <button className="c-h-form-btn l-h-form-btn l-h-form-btn__dsk -f-myriad-cond js-h-btn">
            wyślij i wygraj jacka
          </button>
        </form>
      </div>
    );
  }
  if (statement && !sent) {
    return (
      <form
        onSubmit={handlePersonalInfoSubmit}
        className="js-personal l-f__personal__dsk"
      >
        <div className="l-f-form-textinputs__dsk">
          <input
            type="text"
            className="c-form-input l-form-input__1 c-form-input__dsk -f-myriad-cond u-uppercase"
            name="name"
            placeholder="wpisz imię"
          />
          <input
            type="text"
            className="c-form-input l-form-input c-form-input__dsk -f-myriad-cond u-uppercase"
            name="surname"
            placeholder="wpisz nazwisko"
          />
          <input
            type="email"
            className="c-form-input l-form-input c-form-input__dsk -f-myriad-cond u-uppercase"
            name="email"
            placeholder="wpisz adres e-mail"
          />
        </div>
        <div className="l-f-form-checkbox-container -f-myriad-light u-golden-92">
          <label className="l-f-form-group c-f-form-group">
            Oświadczam, że zapoznałem/am
            <br />
            się i akceptuję
            <a href="/regulations" className="c-f-form-link u-golden-92">
              Regulamin loterii.
            </a>
            *
            <input type="checkbox" id="" name="rules" />
            <span className="c-checkmark"></span>
          </label>
          <label className="l-f-form-group c-f-form-group">
            Oświadczam, że zapoznałem/am
            <br />
            się i akceptuję
            <a href="/privacy" className="c-f-form-link u-golden-92">
              Politykę prywatności.
            </a>
            *
            <input type="checkbox" id="" name="privacy" />
            <span className="c-checkmark"></span>
          </label>
        </div>
        <div className="l-f-form-buttons-container u-uppercase">
          <a
            href="/"
            className="c-f-form-zamknij l-f-form-zamknij -f-myriad-cond"
          >
            zamknij
          </a>
          <button className="c-f-form-btn l-f-form-btn -f-myriad-cond">
            wyślij i wygraj jacka
          </button>
        </div>
      </form>
    );
  }
  if (statement && sent) {
    return (
      <div className="js-sent">
        <div className="c-fs-zgloszenie-container l-fs-zgloszenie-container -f-finlandia">
          <p>
            zgłoszenie zostało wysłane.
            <br />
            dziękujemy!
          </p>
        </div>
        <div className="c-fs-doodwaznych-container l-fs-doodwaznych-container -f-jasper-caps">
          <p>do odważnych jack należy!</p>
        </div>
        <div className="c-fs-twoje-container l-fs-twoje-container -f-myriad-cond u-golden-92">
          <p>
            Twoje wyznanie po zatwierdzeniu przez moderatora pojawi się na
            butelce.
            <br />
            Poinformujemy Cię!
            <br />
            Dodatkowo dowiesz się co wygrałeś.
          </p>
        </div>
        <button
          onClick={() => handleCloseClick()}
          className="c-btn__zamknij l-fs-btn__zamknij -f-myriad-cond"
        >
          zamknij
        </button>
      </div>
    );
  }
};
