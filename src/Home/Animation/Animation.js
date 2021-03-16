import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import { useWindowWidth } from '../../Shared/useWindowWidth';
import bg from './tlo.jpg';
import mask from './maska.png';
import jasper from './font/JasperPl-Caps.otf';
import motlow from './font/Motlow.otf';
import franklin from './font/Franklin.ttf';

const Animation = () => {
  const processingRef = useRef();

  const Sketch = (p) => {
    let zdania = [
      'zostanę bohaterem',
      'wakacje',
      'odnajdę moją prawdziwą mamę',
      'nauczę się tańczyć',
      'pójdę na balet',
      'wagary',
      'nauczę się jeździć na desce',
      'nauczę się boksować',
      'postawię wszystkim kolejkę w barze',
      'przekroczę prędkość na autostradzie',
      'zaśpiewam na moich urodzinach',
      'wezmę udział w zawodach',
      'wezmę kredyt',
      'wygram butelkę Jacka',
    ];
    let zdaniaWszystkie = [];

    let zdaniaWyswietlane = [];
    let fontJasper;
    let fontMotlow;
    let fontFranklin;

    let maska;
    let tlo;
    let tlo2;
    let ileW = [0, 0, 0];
    let t = [0, -50, -40];
    let zi = [0, 0, 0];

    let okres = [10, 10, 10];
    let ruch = [true, true, true];

    let szerokoscButelki = 706;
    let wysokoscButelki = 810;
    let startTekstX = [530, 695, 365];
    let startTekstXwzor = [530, 695, 365];
    let yy = [wysokoscButelki + 10, wysokoscButelki + 20, wysokoscButelki + 20];
    let yyWzor = [
      wysokoscButelki + 10,
      wysokoscButelki + 20,
      wysokoscButelki + 20,
    ];

    let skala;

    let zmiennaDlaJackaSkrzypka = 1; //zmień tę liczbę, żeby zmienić proporcję całego elementu

    let skalaMobile = 900;
    let breakpointMobile = 720;

    p.setup = () => {
      fontJasper = p.loadFont(jasper);
      fontMotlow = p.loadFont(motlow);
      fontFranklin = p.loadFont(franklin);

      tlo = p.loadImage(bg);
      tlo2 = p.loadImage(bg);
      maska = p.loadImage(mask);

      //createCanvas(1139, 1051);
      if (p.windowWidth > breakpointMobile) {
        p.createCanvas(
          p.windowWidth * (1139 / 1920),
          p.windowWidth * (1051 / 1920)
        );
      } else {
        p.createCanvas(
          p.windowWidth * (1139 / skalaMobile),
          p.windowWidth * (1051 / skalaMobile)
        );
      }
      skala = p.width / (1139 * zmiennaDlaJackaSkrzypka);
      for (let i = 0; i < zi.length; i++) {
        //let noweZdania = shuffle(zdania, true); //shuffle być może do usunięcia, gdy będzie podłączona baza
        zdaniaWyswietlane[i] = [];
        zdaniaWszystkie[i] = p.shuffle(zdania, false);
        startTekstX[i] = startTekstXwzor[i] * skala;
        yy[i] = yyWzor[i] * skala;
      }
      maska.resize(1139 * skala, 1051 * skala);
    };

    p.draw = () => {
      p.background(0);
      p.image(tlo2, 0, 0, 1139 * skala, 1051 * skala);

      for (let i = 0; i < zi.length; i++) {
        if (zi[i] < zdaniaWszystkie[i].length) {
          if (ruch[i]) {
            t[i]++;
          }
          // eslint-disable-next-line
          if (t[i] == okres[i]) {
            if (yy[i] < 60) {
              yy[i] = yyWzor[i] * skala;
            }
            zdaniaWyswietlane[i].push(
              new Zdanie(zdaniaWszystkie[i][zi[i]], zi[i], startTekstX[i], i)
            );
            zi[i]++;
            t[i] = 0;
          }
        } else {
          zi[i] = 0;
        }
        ileW[i] = zdaniaWyswietlane[i].length - 1;
        for (let j = ileW[i]; j >= 0; j--) {
          zdaniaWyswietlane[i][j].show();
          if (zdaniaWyswietlane[i][j].martwy) {
            zdaniaWyswietlane[i].splice(j, 1);
          }
        }
      }

      tlo.mask(maska);
      p.image(tlo, 0, 0, 1139 * skala, 1051 * skala);
    };

    p.windowResized = () => {
      if (p.windowWidth > breakpointMobile) {
        p.resizeCanvas(
          p.windowWidth * (1139 / 1920),
          p.windowWidth * (1051 / 1920)
        );
        skala = p.width / (1139 * zmiennaDlaJackaSkrzypka);
        maska.resize(1139 * skala, 1051 * skala);
      } else {
        p.resizeCanvas(
          p.windowWidth * (1139 / skalaMobile),
          p.windowWidth * (1051 / skalaMobile)
        );
        skala = p.width / (1139 * zmiennaDlaJackaSkrzypka);
        maska.resize(1139 * skala, 1051 * skala);
      }
      for (let i = ileW.length; i >= 0; i--) {
        startTekstX[i] = startTekstXwzor[i] * skala;
        yy[i] = yyWzor[i] * skala;
        for (let j = ileW[i]; j >= 0; j--) {
          zdaniaWyswietlane[i].splice(j, 1);
        }
      }
    };

    class Zdanie {
      constructor(txt, nr, x, ik) {
        this.x = x;
        this.linijek = 1;
        this.font = this.wybierzFont(txt);
        this.txt = this.podzialNaLinie(txt, this.font);
        this.ik = ik;
        this.czyDruga = false;
        okres[ik] = 60;
        this.miganie = 60;
        this.widoczne = true;
        this.martwy = false;

        if (this.txt.length > 2) {
          this.linijek = 2;
        }

        this.t = 0;

        // eslint-disable-next-line
        if (this.linijek == 2) {
          this.granice1 = this.font.textBounds(
            this.txt[0],
            startTekstX[ik],
            yy[ik],
            p.int(this.txt[2])
          );
          this.granice2 = this.font.textBounds(
            this.txt[1],
            startTekstX[ik],
            yy[ik],
            p.int(this.txt[3])
          );
          this.y2 = this.granice1.h + this.granice1.y - this.granice2.y; //tyle trzeba dodać do y pierwszej linijki, żeby znaleźć y drugiej linijki

          this.y = yy[ik] - this.y2;

          let roznicaY = yy[ik] - this.granice1.y;

          if (nr > 0) {
            let nrp = nr - 1;

            let zd = zdaniaWyswietlane[ik][nrp];
            // eslint-disable-next-line
            //if (zd.linijek == 1) {
            let ogonki = this.granice2.h - (yy[ik] - this.granice2.y);
            this.y -= ogonki;
            yy[ik] -= ogonki;
            // }
          }
          yy[ik] -= roznicaY + this.y2;
        } else {
          this.granice1 = this.font.textBounds(
            this.txt[0],
            startTekstX[ik],
            yy[ik],
            p.int(this.txt[1])
          );
          let roznicaY = yy[ik] - this.granice1.y;
          let ogonki = this.granice1.h - roznicaY;
          this.y = yy[ik] - ogonki;
          yy[ik] -= roznicaY;
        }
        yy[ik] -= 10 * skala;
        this.x += 30 * p.sin(this.y / 100) * skala;
      }

      show() {
        if (this.t < 650) {
          // eslint-disable-next-line
          if (this.linijek == 2) {
            this.ruchLinijki(
              this.txt[0],
              this.x,
              this.y,
              this.font,
              p.int(this.txt[2]),
              1
            );
            this.ruchLinijki(
              this.txt[1],
              this.x,
              this.y + this.y2,
              this.font,
              p.int(this.txt[3]),
              2
            );
          } else {
            this.ruchLinijki(
              this.txt[0],
              this.x,
              this.y,
              this.font,
              p.int(this.txt[1]),
              1
            );
          }
        } else {
          this.martwy = true;
        }
        this.t++;
      }

      ruchLinijki(txt, x, y, font, s, linijka) {
        p.textFont(font);
        p.textSize(s);
        p.noStroke();
        p.fill(255);
        // eslint-disable-next-line
        if (linijka == 1 && this.linijek == 2) {
          let podzieloneZdanie = p.split(txt, ' ');
          let pl = podzieloneZdanie.length;
          let tl = p.floor(this.t / 10);
          if (tl > pl) {
            tl = pl;
            this.czyDruga = true;
          }
          for (let i = 0; i < tl; i++) {
            let graniceSlowa = font.textBounds(podzieloneZdanie[i], x, y, s);
            //print("slowo: " + podzieloneZdanie[i]);
            let czescLinijki = podzieloneZdanie.slice(0, i + 1);
            let czescPolaczona = p.join(czescLinijki, ' ');
            let graniceCzesci = font.textBounds(czescPolaczona, x, y, s);
            let slowoX = x + graniceCzesci.w - graniceSlowa.w;

            //print("część: " + p.join(czescLinijki, ' '));
            p.text(podzieloneZdanie[i], slowoX, y);
          }
        } else {
          // eslint-disable-next-line
          if (this.czyDruga || this.linijek == 1) {
            if (this.miganie > 0) {
              // eslint-disable-next-line
              if (this.miganie % 10 == 0) {
                this.widoczne = !this.widoczne;
              }

              if (this.widoczne) {
                p.fill(255);
              } else {
                p.fill(255, 0);
              }

              this.miganie--;
            } else {
              p.fill(255);
            }
            p.text(txt, x, y);
            // ruch[this.ik] = true;//to nie działa
          }
        }
      }

      podzialNaLinie(txt, font) {
        let pierwszaLinijka = txt;
        let podzieloneZdanie = p.split(txt, ' ');
        let ostatnieSlowo = podzieloneZdanie.pop(); //usuwam ostatnie słowo z podzieloneZdanie
        let wielkoscOstatnia = 100;
        let wielkoscPierwsza = 100;

        let czySieMiesci = this.sprawdzGranice(
          ostatnieSlowo,
          wielkoscOstatnia,
          font
        );

        while (!czySieMiesci) {
          wielkoscOstatnia--;
          czySieMiesci = this.sprawdzGranice(
            ostatnieSlowo,
            wielkoscOstatnia,
            font
          );
        }

        let linijki = [];

        // eslint-disable-next-line
        if (podzieloneZdanie.length == 0) {
          linijki[0] = txt;
          linijki[1] = p.str(wielkoscOstatnia);
          return linijki;
        } else {
          pierwszaLinijka = p.join(podzieloneZdanie, ' '); //cały tekst bez ostatniego słowa
          czySieMiesci = this.sprawdzGranice(
            pierwszaLinijka,
            wielkoscPierwsza,
            font
          );
          while (!czySieMiesci) {
            wielkoscPierwsza--;
            czySieMiesci = this.sprawdzGranice(
              pierwszaLinijka,
              wielkoscPierwsza,
              font
            );
          }

          linijki[0] = pierwszaLinijka;
          linijki[1] = ostatnieSlowo;
          linijki[2] = p.str(wielkoscPierwsza);
          linijki[3] = p.str(wielkoscOstatnia);

          return linijki;
        }
      }

      sprawdzGranice(txt, s, font) {
        let granice = font.textBounds(txt, startTekstX[0], 0, s); //tu jest startTekstX[0] a nie startTekstX[ik], żeby wielkości napisów były takie same we wszystkich kolumnach
        if (granice.x + granice.w > (szerokoscButelki - 25) * skala) {
          return false;
        } else {
          return true;
        }
      }

      wybierzFont(txt) {
        let litery = p.split(txt, '');
        let ileLiter = litery.length;
        let fonty = [];
        let ł = false;

        for (let i = 0; i < ileLiter; i++) {
          // eslint-disable-next-line
          if (litery[i] == 'ł' || litery[i] == 'Ł') {
            ł = true;
          }
        }

        if (ł) {
          fonty = [fontJasper, fontFranklin];
        } else {
          fonty = [fontJasper, fontFranklin, fontMotlow];
        }

        return fonty[p.floor(p.random(fonty.length))];
      }
    }
  };
  useEffect(() => {
    const newp5 = new p5(Sketch, processingRef.current);
  }, []);
  return <div ref={processingRef} />;
};

export default Animation;
