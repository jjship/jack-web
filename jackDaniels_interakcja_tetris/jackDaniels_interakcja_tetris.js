let zdania = ["zostanę bohaterem", "wakacje", "odnajdę moją prawdziwą mamę", "nauczę się tańczyć", "pójdę na balet", "wagary", "nauczę się jeździć na desce", "nauczę się boksować", "postawię wszystkim kolejkę w barze", "przekroczę prędkość na autostradzie", "zaśpiewam na moich urodzinach", "wezmę udział w zawodach", "wezmę kredyt", "wygram butelkę Jacka"];
let zdaniaWszystkie = [];

let zdaniaWyswietlane = [];
let fontJasper;
let fontMotlow;
let fontFranklin;

let maska;
let tlo;
let tlo2;
let ileW = [0, 0];
let t = [0, -50];
let zi = [0, 0];

let okres = [10, 10];
let ruch = [true, true];

let szerokoscButelki = 706; 
let wysokoscButelki = 810;
let startTekstX = [475, 640];
let yy = [wysokoscButelki+10, wysokoscButelki+20];

function preload() {
  fontJasper = loadFont("font/JasperPl-Caps.otf");  
  fontMotlow = loadFont("font/Motlow.otf");  
  fontFranklin = loadFont("font/Franklin.ttf");  

  tlo = loadImage('tlo.jpg');
  tlo2 = loadImage('tlo.jpg');
  maska = loadImage('maska.png');
}

function setup() {
  createCanvas(1139, 1051);
  
  for (let i = 0; i<zi.length; i++) { 
    //let noweZdania = shuffle(zdania, true); //shuffle być może do usunięcia, gdy będzie podłączona baza    
    zdaniaWyswietlane[i] = [];   
    zdaniaWszystkie[i] = shuffle(zdania, false);
  }
}

function draw() {  
  background(0);
  image(tlo2, 0, 0);

  for (let i = 0; i<zi.length; i++) { 
    if (zi[i] < zdaniaWszystkie[i].length) {
      if (ruch[i]) {
        t[i]++;
      }
      if (t[i] == okres[i]) {
        zdaniaWyswietlane[i].push(new Zdanie(zdaniaWszystkie[i][zi[i]], zi[i], startTekstX[i], i));   
        zi[i]++;  
        t[i]=0;
      }
    }
    ileW[i] = zdaniaWyswietlane[i].length-1;
    for (let j=ileW[i]; j>=0; j--) {
      zdaniaWyswietlane[i][j].show();
    }
  }

  tlo.mask(maska);
  image(tlo, 0, 0);
}


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

    if (this.txt.length > 2) {
      this.linijek = 2;
    }

    this.t = 0;

    if (this.linijek == 2) {
      this.granice1 = this.font.textBounds(this.txt[0], startTekstX[ik], yy[ik], int(this.txt[2]));
      this.granice2 = this.font.textBounds(this.txt[1], startTekstX[ik], yy[ik], int(this.txt[3]));
      this.y2 =  this.granice1.h + this.granice1.y - this.granice2.y; //tyle trzeba dodać do y pierwszej linijki, żeby znaleźć y drugiej linijki

      this.y = yy[ik] - this.y2;

      let roznicaY = yy[ik] - this.granice1.y;

      if (nr>0) {
        let nrp = nr-1;

        let zd = zdaniaWyswietlane[ik][nrp];
        //if (zd.linijek == 1) {          
        let ogonki = this.granice2.h - (yy[ik] - this.granice2.y);
        this.y -= ogonki;
        yy[ik] -= ogonki;
        // }
      }
      yy[ik] -= roznicaY+this.y2;
    } else {
      this.granice1 = this.font.textBounds(this.txt[0], startTekstX[ik], yy[ik], int(this.txt[1]));      
      let roznicaY = yy[ik] - this.granice1.y;      
      let ogonki = this.granice1.h - roznicaY;
      this.y = yy[ik] - ogonki;
      yy[ik] -= roznicaY;
    }
    yy[ik] -= 10;
    this.x += 30 * sin(this.y/100);
  }

  show() {
    if (this.linijek == 2) {           
      this.ruchLinijki(this.txt[0], this.x, this.y, this.font, int(this.txt[2]), 1);
      this.ruchLinijki(this.txt[1], this.x, this.y+this.y2, this.font, int(this.txt[3]), 2);
    } else {   
      this.ruchLinijki(this.txt[0], this.x, this.y, this.font, int(this.txt[1]), 1);
    }
  }

  ruchLinijki(txt, x, y, font, s, linijka) {
    textFont(font);
    textSize(s);
    noStroke();  
    fill(255);

    if (linijka == 1 && this.linijek == 2) {
      let podzieloneZdanie = split(txt, ' ');
      let pl = podzieloneZdanie.length;
      let tl = floor(this.t/10);
      if (tl>pl) {
        tl = pl;
        this.czyDruga = true;
      }
      for (let i = 0; i < tl; i++) {
        let graniceSlowa = font.textBounds(podzieloneZdanie[i], x, y, s);
        //print("slowo: " + podzieloneZdanie[i]);
        let czescLinijki = podzieloneZdanie.slice(0, i+1);    
        let czescPolaczona = join(czescLinijki, ' ');
        let graniceCzesci = font.textBounds(czescPolaczona, x, y, s);       
        let slowoX = x + graniceCzesci.w - graniceSlowa.w;

        //print("część: " + join(czescLinijki, ' '));
        text(podzieloneZdanie[i], slowoX, y);
      }
    } else {
      if (this.czyDruga || this.linijek == 1) {
        if (this.miganie > 0) {          
          if (this.miganie % 10 == 0) {
            this.widoczne = !this.widoczne;
          }

          if (this.widoczne) {
            fill(255);
          } else {
            fill(255, 0);
          }

          this.miganie--;
        } else {
          fill(255);
        }
        text(txt, x, y);
        ruch[this.ik] = true;//to nie działa
      }
    }

    this.t++;
  }

  podzialNaLinie(txt, font) {
    let pierwszaLinijka = txt;    
    let podzieloneZdanie = split(txt, ' ');
    let ostatnieSlowo = podzieloneZdanie.pop();//usuwam ostatnie słowo z podzieloneZdanie
    let wielkoscOstatnia = 100;
    let wielkoscPierwsza = 100;

    let czySieMiesci = this.sprawdzGranice(ostatnieSlowo, wielkoscOstatnia, font);

    while (!czySieMiesci) {
      wielkoscOstatnia--;
      czySieMiesci = this.sprawdzGranice(ostatnieSlowo, wielkoscOstatnia, font);
    }     

    let linijki = [];

    if (podzieloneZdanie.length == 0) {   
      linijki[0] = txt;
      linijki[1] = str(wielkoscOstatnia);
      return linijki;
    } else {
      pierwszaLinijka = join(podzieloneZdanie, ' '); //cały tekst bez ostatniego słowa
      czySieMiesci = this.sprawdzGranice(pierwszaLinijka, wielkoscPierwsza, font);
      while (!czySieMiesci) {
        wielkoscPierwsza--;
        czySieMiesci = this.sprawdzGranice(pierwszaLinijka, wielkoscPierwsza, font);
      }

      linijki[0] = pierwszaLinijka;
      linijki[1] = ostatnieSlowo;
      linijki[2] = str(wielkoscPierwsza);
      linijki[3] = str(wielkoscOstatnia);

      return linijki;
    }
  }

  sprawdzGranice(txt, s, font) {
    let granice = font.textBounds(txt, startTekstX[0], 0, s);//tu jest startTekstX[0] a nie startTekstX[ik], żeby wielkości napisów były takie same we wszystkich kolumnach
    if (granice.x + granice.w > szerokoscButelki-80) {
      return false;
    } else {
      return true;
    }
  }

  wybierzFont(txt) {
    let litery = split(txt, ''); 
    let ileLiter = litery.length;
    let fonty = [];
    let ł = false;

    for (let i = 0; i<ileLiter; i++) {
      if (litery[i] == "ł" || litery[i] == "Ł") {
        ł = true;
      }
    }

    if (ł) {
      fonty = [fontJasper, fontFranklin];
    } else {
      fonty = [fontJasper, fontFranklin, fontMotlow];
    }

    return fonty[floor(random(fonty.length))];
  }
}
