let zdania = ["zostanę bohaterem", "nauczę się tańczyć", "pójdę na balet", "wakacje", "wagary", "seks w miejscu publicznym", "nauczę się boksować", "pocałuję dziewczynę w saunie", "zapalę trawę ze znajomymi na wakacjach", "zaśpiewam na moich urodzinach", "wezmę udział w zawodach", "wezmę kredyt", "odnajdę moją prawdziwą mamę"];
let zdaniaWyswietlane = [];
let fontJasper;
let fontMotlow;
let fontFranklin;

let szerokoscButelki = 706; 
let wysokoscButelki = 810;
let startTekstX = 480;
let maska;
let t=0;
let zi=0;

function preload() {
  fontJasper = loadFont("font/JasperPl-Caps.otf");  
  fontMotlow = loadFont("font/Motlow.otf");  
  fontFranklin = loadFont("font/Franklin.ttf");  

  maska = loadImage('cien_maska_duza.png');
}

function setup() {
  createCanvas(1128, 1087);
  textFont(fontJasper);  
  shuffle(zdania, true);//do usunięcia, gdy będzie podłączona baza
}

function draw() {
  
  background(255);

  if (t%220==0) {
    zdaniaWyswietlane.push(new Zdanie(zdania[zi]));
    zi++;
    if (zi>=zdania.length) {
      zi=0;
    }
  }

  let ile = zdaniaWyswietlane.length-1;

  for (let i=ile; i>=0; i--) {
    zdaniaWyswietlane[i].show();

    if (zdaniaWyswietlane[i].martwy) {
      zdaniaWyswietlane.splice(i, 1);
    }
  }
  
  //dodać zdania nadlatujące z dwóch boków
  
  //dodać blur
  
  //dodać interakcję z kursorem
  
  image(maska, 0, 0);
  t++;
}


class Zdanie {
  constructor(txt) {
    this.x = startTekstX;
    this.y = wysokoscButelki+40;
    this.font = this.wybierzFont(txt);
    this.txt = this.podzialNaLinie(txt, this.font);    

    if (this.txt.length > 2) {
      let granice1 = this.font.textBounds(this.txt[0], startTekstX, 0, int(this.txt[2]));
      let granice2 = this.font.textBounds(this.txt[1], startTekstX, 0, int(this.txt[3]));
      this.y2 = granice2.h - (granice2.h + granice2.y) + granice1.h + granice1.y; //tyle trzeba dodać do y pierwszej linijki, żeby znaleźć y drugiej linijki
    }

    this.sx = random(-0.1, 0.1);
    this.sy = random(0.4, 0.6);
    this.f = random(50, 120);//przeźroczystość
    this.martwy = false;
  }

  show() {
    textFont(this.font);//to powinno być zmienne
    noStroke();
    fill(0, this.f);

    if (this.txt.length == 2) {
      textSize(int(this.txt[1]));
      text(this.txt[0], this.x, this.y+50);//początek na dole, a póżniej leci w góre
    } else {//jeśli jest druga linijka
      textSize(int(this.txt[2]));
      text(this.txt[0], this.x, this.y);
      textSize(int(this.txt[3]));
      text(this.txt[1], this.x, this.y+this.y2);
    }

    this.x += this.sx;
    this.y -= this.sy;

    if (this.y<-100) {
      this.martwy = true;
    }
  }

  podzialNaLinie(txt, font) {
    let pierwszaLinijka = txt;    
    let podzieloneZdanie = split(txt, ' ');  
    let ostatnieSlowo = podzieloneZdanie.pop();//usuwam ostatnie słowo z podzieloneZdanie
    let wielkoscOstatnia = 200;
    let wielkoscPierwsza = 200;

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
    let granice = font.textBounds(txt, startTekstX, 0, s);
    if (granice.x + granice.w > szerokoscButelki) {
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

/*
  text(zdania[0], width/2, 100);//jakaś część tekstów
 filter(BLUR, 1);
 text(zdania[1], width/2, 200); //jakasś inna część
 filter(BLUR, 1);
 text(zdania[2], width/2, 300); //ostatnia część
 */
