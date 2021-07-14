hr = hour();
mn = minute();
sc = second();

strokeWeight(8);
stroke(255,100,150);
noFill();
let secondAngle = map(sc,0,60,0,360);
arc(0,0,300,300,0,secondAngle);

stroke(150,100,255);
let minuteAngle = (mn,0,60,0,360);
arc(0,0,280,280,0,minuteAngle);

stroke(150,255,100);
let hourAngle =map(hr % 12,0,12,0,360);
arc(0,0,260,260,0,hourAngle);

push();
rotate(secondAngle);
stroke(255,100,150);
line(0,0,100,0);
pop();

push();
rotate(minuteAngle);
stroke(150,100,255);
line(0,0,75,0);
pop();

push();
rotate(hourAngle);
stroke(150,255,100);
line(0,0,50,0);
pop();

stroke(255);
point(0,0);



function setup() {
  createCanvas(720, 400);
  noStroke();
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);  
  drawSprites();
}