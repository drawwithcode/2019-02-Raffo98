var i = 0;
var j = 0;
var larg = 50;
var alt = 50;
var rett = [];
var a = 25;
var b = 25;
var x;
var y;

function preload() {
}

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  rectMode(LEFT);
  textAlign(CENTER, CENTER);
  for (a = 50; a <= windowWidth - 75; a += 50) {
    for (b = 50; b <= windowHeight - 75; b += 50) {
      rect(a, b, larg, alt);
      x = a;
      y = b;
      rett[i] = {
        x,
        y
      };
      i++;
    }
  }
  textSize(16);
  text("Hold the mouse button to create a texture", windowWidth / 2, 25);

}

function draw() {
  noStroke();
  for (j = 0; j <= rett.length - 1; j++) {
    if(mouseIsPressed) {
      var col1 = Math.round(random(0, 256));
      var col2 = Math.round(random(0, 256));
      var col3 = Math.round(random(0, 256));
    }
    fill(col1, col2, col3);
    rect(rett[j].x, rett[j].y, larg / 2, alt / 2);
  }

}
