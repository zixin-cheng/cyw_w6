let resolution = 0.1;

let x1 = 0;
let y1 = 0;
let x2ran = 0;
let y2ran = 0;
let x2 = 0;
let y2 = 0;

let pts;
let font;

function preload(){
  font = loadFont('RobotoMono-Thin.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1);
  noFill();
  stroke(255);
  frameRate(10);
  
  xposition = width/5;
  yposition = height/2;
}

function draw() {
  background(0);

  drawText("C", font,width*0.20,height/2);
  drawText("O", font,width*0.40,height/2);
  drawText("D", font,width*0.60,height/2);
  drawText("E", font,width*0.80,height/2);
  
  // noLoop();
}


function drawText(char,fontChoice,x,y){
  
  for(let i = 0; i< 1; i++){
  let x1s = [];
  let y1s = [];
  let x1rans = [];
  let y1rans = [];
  let x1s2 = [];
  let y1s2 = [];
  let x1rans2 = [];
  let y1rans2 = [];
  let minDimension = min(width, height);
  let tSize = minDimension/4;
  let mid = textWidth(char);
    
  pts = fontChoice.textToPoints(char, 0,0,tSize,{
    sampleFactor: resolution,
    simplifyThreshold: 0
  });  

  for(let i = 0; i < pts.length; i++){
    push();
    translate(x-tSize*0.3,y);
    
    if (i === 0) {
    x2ran = random(20);
    y2ran = random(20);
    x1 = pts[i].x + x2ran;
    y1 = pts[i].y + y2ran;
    x2 = pts[i+1].x;
    y2 = pts[i+1].y;
    }
    
    if (i < pts.length-1){
    x2ran = random(20);
    y2ran = random(20);

      if (x1rans[i-1] > 0){
        x2ran = random(-20, 0);
      } else {
        x2ran = random(20);
      }
      if (y1rans[i-1] > 0){
        y2ran = random(-20, 0);
      } else {
        y2ran = random(20);
      }
      
      line(x1, y1, x2, y2);
      x1s.push(x2);
      y1s.push(y2);
      x1rans.push(x2ran);
      y1rans.push(y2ran);
      
      x1 = x1s[i];
      y1 = y1s[i];
      
      x2 = pts[i+1].x+x2ran;
      y2 = pts[i+1].y+y2ran;
      
    } 
    pop(); 
    }

  } 
 
}