let size;
let numero;
let window_w;
let window_h;
let x;
let y;

// symmectric
let s_flag = false;
// parallel
let p_flag = false;

function setup() {
  size = 20;
  numero = 0;
  window_w = 600;
  window_h = 600;
  x = 0;
  y = 0

  frameRate(60);
  let cnv = createCanvas(window_w, window_h, WEBGL);
  cnv.parent("canvas-holder");

  background(100, 100, 100);
}

// DRAW funtions
// used as handles for keypresses

// returns symmetric position
// in relation to x = window_w / 2
function apply_symmetric(func, x, y) {
  func(window_w - x, y);
}

// returns parallel position
// in relation to y axis
function apply_parallel(func, x, y) {
  func(window_w / 2 + x, y);
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
      if (s_flag) { apply_symmetric(rand_ellipse, x, y); }
      if (p_flag) { apply_parallel(rand_ellipse, x, y); }
    }
    if (key == 'b') {
      rand_triangle(x, y);
      if (s_flag) { apply_symmetric(rand_triangle, x, y); }
      if (p_flag) { apply_parallel(rand_triangle, x, y); }
    }
    if (key == 'v') {
      rand_quad(x, y);
      if (s_flag) { apply_symmetric(rand_quad, x, y); }
      if (p_flag) { apply_parallel(rand_quad, x, y); }
    }
    if (key == 'c') {
      rand_line();
    }
    if (key == 'x') {
      rand_bezier();
    }
    if (key == 'z') {
      rand_box(x, y);
      if (s_flag) { apply_symmetric(rand_box, x, y); }
      if (p_flag) { apply_parallel(rand_box, x, y); }
    }
    if (key == 'p') {
      rand_plane(x, y);
      if (s_flag) { apply_symmetric(rand_plane, x, y); }
      if (p_flag) { apply_parallel(rand_plane, x, y); }
    }
    if (key == 'g') {
      rand_cone(x, y);
      if (s_flag) { apply_symmetric(rand_cone, x, y); }
      if (p_flag) { apply_parallel(rand_cone, x, y); }
    }
  }

  x = mouseX;
  y = mouseY;
  if (mouseIsPressed) {
    ellipse(x, y, size, size);
    if (s_flag) { ellipse(window_w - x, y, size, size); }
    if (p_flag) { ellipse(x + window_w / 2, y, size, size); }
  }
}

function keyPressed() {
  // CODED
  if (key == 'u') {
    size += 10;
  } else if (key == 'j') {
    size += 10;
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

  if (key == 's') {
    s_flag = !s_flag;
  }
  if (key == 'a') {
    p_flag = !p_flag;
  }
}
