let zdania = ["mając 40 lat pierwszy raz poszedłem na balet", "tańczyć","pójść na balet", "sanki","wagary", "uprawiałem seks w miejscu publicznym", "nauczyłam się boksować", "pierwszy raz pocałowałem dziewczynę w saunie", "pierwszy raz paliłem trawę ze znajomymi na wakacjach", "odważyłam się zaśpiewać pierwszy raz na moich urodzinach", "pierwszy raz ostatnio wziąłem udział w zawodach", "wziąłem kredyt", "odnalazłem moją prawdziwą mamę"];

let fontJasper;
let szerokoscCzesci = 610;
let szerokoscMalejCzesci = 100;
let szerokoscButelki = 1320; //szerkoscCzesci x2 + szerokoscMalejCzesci 
let wysokoscButelki = 830;
let butelkaX = 100;
let butelkaY = 100;

function preload() {
  fontJasper = loadFont("font/JasperPl-Caps.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(fontJasper);  
  shuffle(zdania, true);
}


function draw() {
  background(255);
  noFill();
  stroke(100);
  strokeWeight(2);
  rect(butelkaX, butelkaY, szerokoscCzesci, wysokoscButelki);
  rect(710, butelkaY, szerokoscMalejCzesci, wysokoscButelki);
  rect(810, butelkaY, szerokoscCzesci, wysokoscButelki);

  generatorTextu(145, butelkaX, butelkaY + 100);//pierwszy parametr to wielkość pierwszej linijki
}

function generatorTextu(wielkosc, x, y) {
  noStroke();
  fill(20);

  let poczatekZdania = createVector();
  poczatekZdania.set(x, y); 

  for (let i = 0; i < zdania.length; i++) {
    if (i == 0) {
      poczatekZdania = podzialNaLinie(zdania[i], poczatekZdania.x, poczatekZdania.y, wielkosc);
    } else {
      poczatekZdania = podzialNaLinie(zdania[i], poczatekZdania.x + wielkosc/3, poczatekZdania.y, wielkosc);
    }
    wielkosc /= 1.2;
  }
}

function podzialNaLinie(txt, x, y, s) {//tu jest text(), a było textToPoints()
  let pierwszaLinijka = txt;
  let drugaLinijkaPodzielona = [];
  let drugaLinijka;

  let xx = x;
  let yy = y;

  let kropka = createVector();

  let polskieZnaki = false;

  let podzieloneZdanie = split(txt, ' ');  
  let pierwszeSlowo = podzieloneZdanie.shift();

  let czySieMiesci = sprawdzGranice(pierwszeSlowo, xx, yy, s);
  if (!czySieMiesci) {
    xx = butelkaX;
    yy += s;
  }

  czySieMiesci = sprawdzGranice(pierwszaLinijka, xx, yy, s);

  textSize(s);

  if (czySieMiesci) {
    text(txt, xx, yy);

    let granice = fontJasper.textBounds(txt, xx, yy, s);  
    let kazdaLiteraOddzielnie = split(txt, ''); 

    for (let i = 0; i < kazdaLiteraOddzielnie.length; i++) {
      if (kazdaLiteraOddzielnie[i] == 'ę' || kazdaLiteraOddzielnie[i] == 'ą') {
        polskieZnaki = true;
      }
    }
    if (polskieZnaki) {
      kropka.set(granice.x + granice.w, granice.y + granice.h - s/6);
      stroke('red');
    } else {
      kropka.set(granice.x + granice.w, granice.y + granice.h);
      stroke('blue');
    }

    
    strokeWeight(5);
    point(kropka);
    noStroke();
    return kropka;
  } else {
    while (!czySieMiesci) {
      podzieloneZdanie = split(pierwszaLinijka, ' ');       
      drugaLinijkaPodzielona.unshift(podzieloneZdanie.pop());//dodaje na początek tablicy ostatnie słowo i usuwa go z podzieloneZdanie
      pierwszaLinijka = join(podzieloneZdanie, ' ');
      czySieMiesci = sprawdzGranice(pierwszaLinijka, xx, yy, s);
    }
    drugaLinijka = join(drugaLinijkaPodzielona, ' ');

    let odstepDrugiej = yy + s - s/4;

    text(pierwszaLinijka, xx, yy);    
    text(drugaLinijka, butelkaX, odstepDrugiej);
    let graniceDrugiej = fontJasper.textBounds(drugaLinijka, butelkaX, odstepDrugiej, s); 
    let kazdaLiteraOddzielnie = split(drugaLinijka, ''); 

    for (let i = 0; i < kazdaLiteraOddzielnie.length; i++) {
      if (kazdaLiteraOddzielnie[i] == 'ę' || kazdaLiteraOddzielnie[i] == 'ą') {
        polskieZnaki = true;
      }
    }
    if (polskieZnaki) {
      kropka.set(graniceDrugiej.x + graniceDrugiej.w, graniceDrugiej.y + graniceDrugiej.h - s/6);
      stroke('red');
    } else {
      kropka.set(graniceDrugiej.x + graniceDrugiej.w, graniceDrugiej.y + graniceDrugiej.h);
      stroke('blue');
    }


    
    strokeWeight(5);
    point(kropka);
    noStroke();
    return kropka;
  }


  //let linijki = [pierwszaLinijka, drugaLinijka];
  //return linijki;
}


function sprawdzGranice(txt, x, y, s) {
  let granice = fontJasper.textBounds(txt, x, y, s);
  if (granice.x + granice.w > szerokoscButelki) {
    return false;
  } else {
    return true;
  }
}
