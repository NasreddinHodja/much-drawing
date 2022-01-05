'use strict'

var size = 20;
var numero = 0;
var window_w = 600;
var window_h = 600;
var x = 0;
var y = 0;

function setup() {
  frameRate(60);
  let cnv = createCanvas(window_w, window_h, WEBGL);
  cnv.parent("canvas-holder");
  background(100, 100, 100);
}

// DRAW funtions
// used as handles for keypresses
function rand_ellipse(x, y) {
  ellipse(x, y, random(0, 60), random(5, 33));
  stroke(random(0, 255), random(0, 255), random(0, 255));
}

function rand_triangle(x, y) {
  triangle(x, y, x, y, x, random(0, 50));
}

function rand_quad(x, y) {
  quad(x, y, 33, random(0, 90),
       random(0, 900), 567, 44,
       random(0, 999));
}

function rand_line() {
  line(random(0, 1920), random(0, 1080),
       random(0, 1920), random(0, 1080));
}

function rand_bezier() {
  bezier(random(0, 1920), random(0, 1080),
         random(0, 1920), random(0, 1080),
         random(0, 1920), random(0, 1080),
         random(0, 1920), random(0, 1080));
}

function rand_box(x, y) {
  push();
  translate(x, y, 0);
  rotateY(random(0, 1));
  fill(random(0, 255), random(0, 255), random(0, 255),
       random(0, 25))
  stroke(random(0, 255), random(0, 255), random(0, 255));
  box(random(0, window_w / 4));
  pop();
}

// draws symmetric ellipses of cursor
// in relation to x = window_w / 2
function symmetric(x, y) {
  ellipse(window_w - x, y, size, size);
}

// draws parallel ellipses of cursor
// in relation to y axis
function parallel(x, y) {
  ellipse(window_w / 2 + x, y, size, size);
}

function draw() {
  stroke(0, 0, 0);
  translate(-(window_w / 2) , -(window_h / 2));
  if (keyIsPressed == true) {
    if (key == 'm') {
      noStroke();
    }
    if (key == 'n') {
      rand_ellipse(x, y);
    }
    if (key == 'b') {
      rand_triangle(x, y);
    }
    if (key == 'v') {
      rand_quad(x, y);
    }
    if (key == 'c') {
      rand_line();
    }
    if (key == 'x') {
      rand_bezier();
    }
    if (key == 'z') {
      rand_box(x, y);
    }
    if (key == 's') {
      symmetric(x, y);
    }
    if (key == 'a') {
      parallel(x, y);
    }
  }

  x = mouseX;
  y = mouseY;
  ellipse(x, y, size, size);
}

function keyPressed() {
  // CODED
  if (key == 'u') {
    size = size + 10;
  } else if (key == 'j') {
    size = size - 10;
  } else if (key == 'k') {
    fill(random(0, 255), random(0, 255),
         random(0, 255), random(0, 100));
  } else if (key == 'h') {
    fill(255, 255, 255);
  } else if (key== 'q') { // not CODED
    background(random(0, 255), random(0, 255), random(0, 255));
  } else if (key == 'e') {
    save("drawWWWee.jpg");
  }
}
