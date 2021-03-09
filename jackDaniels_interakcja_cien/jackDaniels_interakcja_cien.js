let zdania = ["zostanę bohaterem", "nauczę się tańczyć", "pójdę na balet", "wakacje", "wagary", "seks w miejscu publicznym", "nauczę się boksować", "pocałuję dziewczynę w saunie", "zapalę trawę ze znajomymi na wakacjach", "zaśpiewam na moich urodzinach", "wezmę udział w zawodach", "wezmę kredyt", "odnajdę moją prawdziwą mamę"];

let zdaniaWyswietlane = [];
let zdaniaZBoku1 = [];
let zdaniaZBoku2 = [];
let fontJasper;
let fontMotlow;
let fontFranklin;

let szerokoscButelki = 706; 
let wysokoscButelki = 810;
let startTekstX = 480;
let maska;
let tlo;
let tlo2;
let t=0;
let tb1=0;
let tb2=0;
let zi=0;
let zib1=5;
let zib2=10;

let okres = 20;
let okresb1 = 120;
let okresb2 = 120;

function preload() {
  fontJasper = loadFont("font/JasperPl-Caps.otf");  
  fontMotlow = loadFont("font/Motlow.otf");  
  fontFranklin = loadFont("font/Franklin.ttf");  

  //maska = loadImage('dziura_po_cieniu.png');
  //tlo = loadImage('wypelnienie_butelki.png');
  tlo = loadImage('tlo.jpg');
  tlo2 = loadImage('tlo.jpg');
  maska = loadImage('maska.png');
}

function setup() {
  createCanvas(1139, 1051);
  shuffle(zdania, true);//do usunięcia, gdy będzie podłączona baza
}

function draw() {  
  background(0);
  image(tlo2, 0, 0);
  t++;
  tb1++;
  tb2++;

  if (t==okres) {
    zdaniaWyswietlane.push(new Zdanie(zdania[zi], startTekstX));   
    zi++;  
    if (zi>=zdania.length) {
      zi=0;
    }
    t=0;
  }


  if (okresb1==tb1) {  
    zdaniaZBoku1.push(new Zdanie(zdania[zib1], startTekstX-290));  
    zib1++;  
    if (zib1>=zdania.length) {
      zib1=0;
    }
    tb1=0;
  }

  if (okresb2==tb2) {    
    zdaniaZBoku2.push(new Zdanie(zdania[zib2], startTekstX+290));     
    zib2++;    
    if (zib2>=zdania.length) {
      zib2=0;
    }
    tb2=0;
  }

  let ile = zdaniaWyswietlane.length-1;
  let ile1 = zdaniaZBoku1.length-1;
  let ile2 = zdaniaZBoku2.length-1;

  for (let i=ile; i>=0; i--) {
    zdaniaWyswietlane[i].show();  
    if (zdaniaWyswietlane[i].martwy) {
      zdaniaWyswietlane.splice(i, 1);
    }
  }

  for (let i=ile1; i>=0; i--) {   
    zdaniaZBoku1[i].show();   
    if (zdaniaZBoku1[i].martwy) {
      zdaniaZBoku1.splice(i, 1);
    }
  }

  for (let i=ile2; i>=0; i--) {      
    zdaniaZBoku2[i].show();
    if (zdaniaZBoku2[i].martwy) {
      zdaniaZBoku2.splice(i, 1);
    }
  }
  tlo.mask(maska);
  image(tlo, 0, 0);
}


class Zdanie {
  constructor(txt, x) {
    this.x = x;
    this.y = wysokoscButelki+40;
    this.font = this.wybierzFont(txt);
    this.txt = this.podzialNaLinie(txt, this.font);    
    this.t = 0;
    this.sx = random(-0.05, 0.05);
    // this.sy = random(0.4, 0.6);
    this.sy = 0.4;
    this.f = random(80, 140);//przeźroczystość
    this.martwy = false;
    this.o = 0;

    if (this.txt.length > 2) {
      this.granice1 = this.font.textBounds(this.txt[0], startTekstX, 0, int(this.txt[2]));
      this.granice2 = this.font.textBounds(this.txt[1], startTekstX, 0, int(this.txt[3]));
      this.y2 =  this.granice2.h - (this.granice2.h + this.granice2.y) + this.granice1.h + this.granice1.y; //tyle trzeba dodać do y pierwszej linijki, żeby znaleźć y drugiej linijki
      this.o = int((this.granice1.h + this.granice2.h)/this.sy) + 70;
    } else {
      this.granice1 = this.font.textBounds(this.txt[0], startTekstX, 0, int(this.txt[1]));
      this.o = int(this.granice1.h/this.sy) + 70;
    }

    if (x == startTekstX) {
      okres = this.o;
    } else if (x < startTekstX) {
      okresb1 = this.o;
      this.f -= 60;
      this.sx += 0.08;
    } else {
      okresb2 = this.o;
      this.f -= 60;
      this.sx -= 0.08;
    }
    //print(this.o);
  }


  show() {
    if (this.txt.length == 2) {      
      this.ruchOsobnychLiter(this.txt[0], this.x, this.y+50, this.font, int(this.txt[1]), this.f);
    } else {//jeśli jest druga linijka      
      this.ruchOsobnychLiter(this.txt[0], this.x, this.y+50, this.font, int(this.txt[2]), this.f);
      this.ruchOsobnychLiter(this.txt[1], this.x, this.y+50+this.y2, this.font, int(this.txt[3]), this.f);
    }

    this.x += this.sx;
    this.y -= this.sy;

    if (this.y<-100) {
      this.martwy = true;
    }
  }

  ruchOsobnychLiter(txt, x, y, font, s, kolor) {  
    let podzieloneNaLitery = split(txt, '');  
    let ileLiter = podzieloneNaLitery.length;

    push();

    let graniceLinijki = font.textBounds(txt, x, y, s);
   

    if (mouseX > graniceLinijki.x && mouseX < graniceLinijki.x + graniceLinijki.w && mouseY > graniceLinijki.y && mouseY < graniceLinijki.y + graniceLinijki.h) {
      this.t+=3;
    //   stroke('pink');
   // strokeWeight(1);
   // noFill();
  // rect(graniceLinijki.x,graniceLinijki.y,graniceLinijki.w,graniceLinijki.h);
    } else {
      this.t--;
    }

    if (this.t<0) {
      this.t = 0;
    } else if (this.t>30) {
      this.t = 30;
    }
    
    textFont(font);
    noStroke();    
    fill(255);
   // fill(255, kolor+this.t);
    //print(this.t);
    textSize(s+this.t/10);
    for (let i = 0; i < ileLiter; i++) {
      let graniceLitery = font.textBounds(podzieloneNaLitery[i], x, y, s);
      let czescLinijki = podzieloneNaLitery.slice(0, i+1);     
      let graniceCzesci = font.textBounds(czescLinijki, x, y, s);       
      let literaX = x + graniceCzesci.w - graniceLitery.w + 50 * sin(y/100);   
      let literaY = y + 3 * sin(literaX/30);      

      /*
      let easing = 0.4;     
       
       let dx = v.x - this.xx;
       this.xx += dx * easing;
       
       let dy = v.y - this.yy;
       this.yy += dy * easing;*/



      text(podzieloneNaLitery[i], literaX, literaY);
    }

    pop();
  }

  /*odepchnij(x, y, r, e) {
   let odleglosc = dist(mouseX, mouseY, x, y);
   let v = createVector(0, 0); 
   if (odleglosc < r) {
   //line(mouseX, mouseY, x, y);
   v.set(x-mouseX, y-mouseY);   
   let dlugosc = r/odleglosc;  
   v.setMag(dlugosc); 
   v.div(e);
   }
   return v;
   }*/

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
