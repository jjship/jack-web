let zdania = ["mając 40 lat pierwszy raz poszedłem na balet", "tańczyć", "pójść na balet", "sanki", "wagary", "uprawiałem seks w miejscu publicznym", "nauczyłam się boksować", "pierwszy raz pocałowałem dziewczynę w saunie", "pierwszy raz paliłem trawę ze znajomymi na wakacjach", "odważyłam się zaśpiewać pierwszy raz na moich urodzinach", "pierwszy raz ostatnio wziąłem udział w zawodach", "wziąłem kredyt", "odnalazłem moją prawdziwą mamę"];
let zdaniaWyswietlane = [];
let fontJasper;
let fontMotlow;
let fontFranklin;
let szerokoscButelki = 250; 
let wysokoscButelki = 774;
let startTekst = 0;
let maska;
let t=0;
let zi=0;

function preload() {
  fontJasper = loadFont("font/JasperPl-Caps.otf");  
  fontMotlow = loadFont("font/Motlow.otf");  
  fontFranklin = loadFont("font/FranklinGothic.ttf");  
  maska = loadImage('cien_maska.png');
}

function setup() {
  createCanvas(252, 774);
  textFont(fontJasper);  
  shuffle(zdania, true);//do usunięcia, gdy będzie podłączona baza
}

function draw() {
  t++;
  background(255);
  /*
  text(zdania[0], width/2, 100);//jakaś część tekstów
   filter(BLUR, 1);
   text(zdania[1], width/2, 200); //jakasś inna część
   filter(BLUR, 1);
   text(zdania[2], width/2, 300); //ostatnia część
   */


  if (t%90==0) {
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
      print(i);
      zdaniaWyswietlane.splice(i, 1);
    }
  }
  image(maska, 0, 0);
}


class Zdanie {
  constructor(txt) {
    this.x = 0;
    this.y = wysokoscButelki;
    this.s = 22;//to powinno być zmienne
    this.txt = this.podzialNaLinie(txt, this.s);
    this.sx = random(-0.2, 0.2);
    this.sy = random(0.5, 0.9);
    this.f = random(50, 120);
    this.martwy = false;
  }

  show() {
    textSize(this.s);
    textFont(fontJasper);//to powinno być zmienne
    fill(this.f);
    text(this.txt[0], this.x, this.y);//początek na dole, a póżniej leci w góre
    if (this.txt.length > 0) {//jeśli jest druga linijka
      text(this.txt[1], this.x, this.y+this.s);
    }
   
    this.x += this.sx;
    this.y -= this.sy;

    if (this.y<0) {
      this.martwy = true;
    }
  }

  podzialNaLinie(txt, s) {
    let pierwszaLinijka = txt;
    let drugaLinijkaPodzielona = [];
    let drugaLinijka;

    let fj = fontJasper;

    let podzieloneZdanie = split(txt, ' ');  
    //let pierwszeSlowo = podzieloneZdanie.shift();

    //let czySieMiesci = sprawdzGranice(pierwszeSlowo, s);
    //if (!czySieMiesci) {    
    // yy += s;
    // }

    let czySieMiesci = this.sprawdzGranice(pierwszaLinijka, s);

    let linijki = [];

    if (czySieMiesci) {   
      linijki[0] = txt;
      return linijki;
    } else {
      while (!czySieMiesci) {
        podzieloneZdanie = split(pierwszaLinijka, ' ');       
        drugaLinijkaPodzielona.unshift(podzieloneZdanie.pop());//dodaje na początek tablicy ostatnie słowo i usuwa go z podzieloneZdanie
        pierwszaLinijka = join(podzieloneZdanie, ' ');
        czySieMiesci = this.sprawdzGranice(pierwszaLinijka, s);
      }
      drugaLinijka = join(drugaLinijkaPodzielona, ' '); 
      //sprawdzić czy mieści się druga linijka, jeśli nie, to zmniejszyć font i powtórzyć proces

      linijki[0] = pierwszaLinijka;
      linijki[1] = drugaLinijka;
      return linijki;
    }
  }

  sprawdzGranice(txt, s) {
    let fj = fontJasper;

    let granice = fj.textBounds(txt, startTekst, 0, s);
    if (granice.x + granice.w > szerokoscButelki) {
      return false;
    } else {
      return true;
    }
  }
}
