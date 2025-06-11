let carX = 400;
let cowX = 100;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  // Campo (esquerda)
  fill(100, 200, 100);
  rect(0, 0, width / 2, height);
  drawTree(100, 250);
  drawTree(200, 300);
  drawTree(150, 200);

  // Cidade (direita)
  fill(180);
  rect(width / 2, 0, width / 2, height);
  drawBuilding(500, 200, 80, 180);
  drawBuilding(600, 150, 60, 230);
  drawBuilding(700, 180, 70, 200);

  // Estrada conectando os dois
  fill(50);
  rect(0, height - 60, width, 60);

  // Faixas da estrada
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < width; i += 40) {
    line(i, height - 30, i + 20, height - 30);
  }
  noStroke();

  // Vaca andando no campo
  drawCow(cowX, height - 100);

  // Carro andando na cidade
  drawCar(carX, height - 80);

  // Movimento da vaca (apenas no campo)
  cowX += 1;
  if (cowX > width / 2 - 100) {
    cowX = 0;
  }

  // Movimento do carro (apenas na cidade)
  carX += 2;
  if (carX > width) {
    carX = width / 2;
  }
}

function drawCar(x, y) {
  fill(255, 0, 0);
  rect(x, y, 100, 40, 10);
  fill(0);
  ellipse(x + 20, y + 40, 20);
  ellipse(x + 80, y + 40, 20);
}

function drawTree(x, y) {
  fill(139, 69, 19);
  rect(x + 10, y, 20, 50);
  fill(34, 139, 34);
  ellipse(x + 20, y - 10, 60, 60);
}

function drawBuilding(x, y, w, h) {
  fill(100);
  rect(x, y, w, h);
  fill(255);
  for (let i = 10; i < h - 20; i += 30) {
    for (let j = 10; j < w - 10; j += 20) {
      rect(x + j, y + i, 10, 10);
    }
  }
}

function drawCow(x, y) {
  fill(255);
  rect(x, y, 60, 30); // corpo
  fill(0);
  ellipse(x + 15, y + 5, 10); // manchas
  ellipse(x + 45, y + 10, 8);
  fill(255);
  ellipse(x + 60, y + 10, 20, 20); // cabeça
  fill(0);
  ellipse(x + 65, y + 10, 5); // olho
  stroke(0);
  line(x + 62, y + 20, x + 70, y + 25); // boca
  noStroke();
}
