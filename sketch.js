let x, y, w, h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  strokeWeight(1);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  
  x = width/10;
  w = mouseX/10;
  y = height/2;
  h = mouseY/5;

  drawC(x*2, y, w, h);
  drawO(x*4, y, w, h);
  drawD(x*6, y, w, h);
  drawE(x*8, y, w, h);
}

function drawC(xCord, yCord, x, y) {
  push();
  translate(xCord, yCord)
  beginShape();
  vertex(40 + x, -60 - y);
  vertex(20 + x, -40 - y);
  vertex(30 + x, -90 - y);
  vertex(10 + x, -70 - y);
  vertex(20 + x, -90 - y);
  vertex(-10, -80 - y);
  vertex(-20 - x, -100 - y);
  vertex(-20 - x, -70 - y);
  vertex(-30 - x, -80 - y);
  vertex(-30 - x, -50 - y);
  vertex(-50 - x, -40 - y);
  vertex(-30 - x, -20 - y);
  vertex(-50 - x, -20 - y);
  vertex(-30 - x, 20);
  vertex(-30 - x, 20);
  vertex(-40 - x, 40 + y);
  vertex(-20 - x, 60 + y);
  vertex(-30 - x, 60 + y);
  vertex(-40 - x, 80 + y);
  vertex(-20 - x, 80 + y);
  vertex(-10 - x, 110 + y);
  vertex(0, 90 + y);
  vertex(10 + x, 100 + y);
  vertex(10 + x, 80 + y);
  vertex(40 + x, 100 + y);
  vertex(20 + x, 60 + y);
  vertex(40 + x, 40 + y);
  vertex(20 + x, 40 + y);
  vertex(40 + x, 80 + y);
  vertex(10 + x, 70 + y);
  vertex(20 + x, 100 + y);
  vertex(0, 80 + y);
  vertex(0 - x, 110 + y);
  vertex(-10 - x, 80 + y);
  vertex(-20 - x, 100 + y);
  vertex(-40 - x, 60 + y);
  vertex(-30 - x, 50 + y);
  vertex(-50 - x, 30 + y);
  vertex(-20 - x, -10 + y);
  vertex(-50 - x, 0);
  vertex(-40 - x, -40 - y);
  vertex(-50 - x, -60 - y);
  vertex(-30 - x, -50 - y);
  vertex(-40 - x, -70 - y);
  vertex(-20 - x, -60 - y);
  vertex(-30 - x, -90 - y);
  vertex(-10 - x, -70 - y);
  vertex(0, -90 - y);
  vertex(0 + x, -80 - y);
  vertex(40 + x, -80 - y);
  vertex(20 + x, -50 - y);
  endShape(CLOSE);
  pop();
}

function drawO(xCord, yCord, x, y) {
  push();
  translate(xCord, yCord)
  beginShape();
  vertex(-20 - x, -60 - y);
  vertex(-50 - x, -60 - y);
  vertex(-20 - x, -30 - y);
  vertex(-40 - x, -20 - y);
  vertex(-30 - x, 0);
  vertex(-40 - x, 20 + y);
  vertex(-30 - x, 50 + y);
  vertex(-50 - x, 70 + y);
  vertex(-30 - x, 70 + y);
  vertex(-30 - x, 100 + y);
  vertex(-20 - x, 90 + y);
  vertex(10, 110 + y);
  vertex(10 + x, 90 + y);
  vertex(20 + x, 100 + y);
  vertex(30 + x, 70 + y);
  vertex(40 + x, 50 + y);
  vertex(20 + x, 30 + y);
  vertex(40 + x, 20 + y);
  vertex(30 + x, 10);
  vertex(40 + x, -20 - y);
  vertex(30 + x, -30 - y);
  vertex(40 + x, -60 - y);
  vertex(20 + x, -60 - y);
  vertex(30 + x, -80 - y);
  vertex(10 + x, -70 - y);
  vertex(0 + x, -100 - y);
  vertex(-10, -80 - y);
  vertex(-20 - x, -60 - y);
  vertex(-20 - x, -80 - y);
  vertex(-10, -70 - y);
  vertex(20 + x, -90 - y);
  vertex(20 + x, -70 - y);
  vertex(30 + x, -60 - y);
  vertex(50 + x, -40 - y);
  vertex(20 + x, -40 - y);
  vertex(40 + x, -30);
  vertex(30 + x, -20 + y);
  vertex(50 + x, 0 + y);
  vertex(20 + x, 10 + y);
  vertex(30 + x, 50 + y);
  vertex(50 + x, 70 + y);
  vertex(10 + x, 80 + y);
  vertex(30 + x, 90 + y);
  vertex(-10, 100 + y);
  vertex(-20 - x, 80 + y);
  vertex(-40 - x, 80 + y);
  vertex(-30 - x, 60 + y);
  vertex(-50 - x, 50 + y);
  vertex(-20 - x, 40 + y);
  vertex(-40 - x, 40 + y);
  vertex(-30 - x, 20 + y);
  vertex(-40 - x, y);
  vertex(-20 - x, -10 + y);
  vertex(-40 - x, -10 + y);
  vertex(-20 - x, -40 + y);
  vertex(-40 - x, -40);
  vertex(-50 - x, -70);
  endShape(CLOSE);
  pop();
}

function drawD(xCord, yCord, x, y) {
  push();
  translate(xCord, yCord)
  beginShape();
  vertex(-10 - x, -70 - y);
  vertex(-10, -100 - y);
  vertex(10 + x, -70 - y);
  vertex(30 + x, -80 - y);
  vertex(30 + x, -60 - y);
  vertex(50 + x, -40 - y);
  vertex(20 + x, -30 - y);
  vertex(50 + x, 20);
  vertex(20 + x, 30 + y);
  vertex(40 + x, 80 + y);
  vertex(10 + x, 80 + y);
  vertex(0 + x, 100 + y);
  vertex(10, 90 + y);
  vertex(-20 - x, 110 + y);
  vertex(-30 - x, 100 + y);
  vertex(-30 - x, 80 + y);
  vertex(-20 - x, 40 + y);
  vertex(-50 - x, 60 + y);
  vertex(-30 - x, 10 + y);
  vertex(-40 - x, -10);
  vertex(-20 - x, -10 - y);
  vertex(-40 - x, -60 - y);
  vertex(-20 - x, -50 - y);
  vertex(-50 - x, -100 - y);
  vertex(-10 - x, -70 - y);
  vertex(-50 - x, -80 - y);
  vertex(-20 - x, -60 - y);
  vertex(-30 - x, -50 - y);
  vertex(-40 - x, -30 - y);
  vertex(-20 - x, -30 - y);
  vertex(-30 - x, -y);
  vertex(-40 - x, 10 - y);
  vertex(-30 - x, 30);
  vertex(-50 - x, 30 + y);
  vertex(-20 - x, 70 + y);
  vertex(-40 - x, 70 + y);
  vertex(-30 - x, 90 + y);
  vertex(-50 - x, 110 + y);
  vertex(-10, 100 + y);
  vertex(20 + x, 90 + y);
  vertex(30 + x, 70 + y);
  vertex(40 + x, 60 + y);
  vertex(20 + x, 60 + y);
  vertex(30 + x, 20 + y);
  vertex(50 + x, 10 + y);
  vertex(30 + x, 0);
  vertex(30 + x, -40 - y);
  vertex(40 + x, -70 - y);
  vertex(20 + x, -70 - y);
  vertex(20 + x, -90 - y);
  endShape(CLOSE);
  pop();
}

function drawE(xCord, yCord, x, y) {
  push();
  translate(xCord, yCord)
  beginShape();
  vertex(40 + x, -80 - y);
  vertex(0 + x, -70 - y);
  vertex(-10, -100 - y);
  vertex(-20 - x, -80 - y);
  vertex(-50 - x, -90 - y);
  vertex(-30 - x, -60 - y);
  vertex(-50 - x, -60 - y);
  vertex(-30 - x, -30 - y);
  vertex(-40 - x, - y);
  vertex(-40 - x, 10);
  vertex(-50 - x, 30 + y);
  vertex(-30 - x, 50 + y);
  vertex(-50 - x, 70 + y);
  vertex(-20 - x, 80 + y);
  vertex(-50 - x, 110 + y);
  vertex(-20 - x, 90 + y);
  vertex(-10, 110 + y);
  vertex(0 + x, 90 + y);
  vertex(40 + x, 100 + y);
  vertex(30 + x, 80 + y);
  vertex(0, 110 + y);
  vertex(-40 - x, 90 + y);
  vertex(-30 - x, 60 + y);
  vertex(-40 - x, 50 + y);
  vertex(-30 - x, 30 + y);
  vertex(-50 - x, 10);
  vertex(-20 - x, 0);
  vertex(0, 20);
  vertex(0 + x, -10);
  vertex(30 + x, 10);
  vertex(20, -10);
  vertex(10, 0);
  vertex(-20 - x, 10);
  vertex(-50 - x, -20);
  vertex(-30 - x, -10 - y);
  vertex(-40 - x, -70 - y);
  vertex(-20 - x, -70 - y);
  vertex(-30 - x, -90 - y);
  vertex(0, -80 - y);
  vertex(20, -80 - y);
  endShape(CLOSE);
  pop();
}