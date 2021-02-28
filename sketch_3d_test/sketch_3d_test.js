let butelka;
let okladka;

let lewaSciana;
let prawaSciana;

let fontJasper;

function preload() {
  butelka = loadModel('files/jack_daniels.obj');
  okladka = loadImage('files/Jack_Daniels_Logo_03.jpg');
  fontJasper = loadFont("font/JasperPl-Caps.otf");
}


function setup() {
  createCanvas (1000, 600, WEBGL); 

  angleMode(DEGREES);  
  rectMode(CENTER);

  noStroke();
  noFill();

  lewaSciana = createGraphics(150, 150);
  //lewaSciana.textAlign(CENTER);
  //lewaSciana.background(255, 10);
  lewaSciana.noStroke();
  lewaSciana.textSize(20);
  lewaSciana.textFont(fontJasper);
  lewaSciana.fill(120);
  lewaSciana.text('pierwszy raz', 20, 20);

  prawaSciana = createGraphics(150, 150);
  //lewaSciana.textAlign(CENTER);
  // prawaSciana.background(255, 10);
  prawaSciana.textFont(fontJasper);
  prawaSciana.noStroke();
  prawaSciana.textSize(20);
  prawaSciana.fill(120);
  prawaSciana.text('pierwszy raz', 30, 20);
}


function draw() {
  background(0);
  ambientLight(200);
  //directionalLight(100, 100, 100, 0, 0, 1);
  directionalLight(100, 100, 100, 0, 0, -1);
  pointLight(20, 20, 20, mouseX-500, mouseY-300, -100);
  rotateY(-40 - mouseX/100);
  // rotateX(mouseY/500);
  // rotateZ(mouseY/500);
  translate(0, 70, 0); 
  scale(70);
  rotateX(180);
  //texture(okladka);

  // normalMaterial();
  specularMaterial(120, 40, 10);
  //fill(120,40,10);
  model(butelka);
  scale(1/70);
  rotateX(-180);
  translate(0, -70, 0); 
  translate(0, 20, 50); 
  texture(lewaSciana);
  plane(150, 150);
  translate(70, 0, -50); 
  rotateY(90);
  texture(prawaSciana);
  plane(150, 150);
}
