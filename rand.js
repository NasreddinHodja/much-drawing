function rand_ellipse(x, y) {
  push();
  fill(random(100, 255), random(0, 255), random(0, 255));
  ellipse(x, y, random(0, 60), random(5, 33));
  pop();
}

function rand_triangle(x, y) {
  triangle(x, y, x, y, x, random(0, 50));
}

function rand_quad(x, y) {
  push();
  fill(random(100, 255), random(100, 255), random(0, 255));
  quad(x, y, 33, random(0, 90),
       random(0, 900), 567, 44,
       random(0, 999));
  pop();
}

function rand_line() {
  line(random(0, 1920), random(0, 1080),
       random(0, 1920), random(0, 1080));
}

function rand_bezier() {
  push();
  fill(random(0, 100), random(0, 255), random(0, 20),
       random(90, 100))
  rotateX(random(0, 360));
  rotateY(random(0, 360));
  rotateZ(random(0, 360));
  bezier(random(0, 1920), random(0, 1080),
         random(0, 1920), random(0, 1080),
         random(0, 1920), random(0, 1080),
         random(0, 1920), random(0, 1080));
  pop();
}

function rand_box(x, y) {
  push();
  translate(x, y, 0);
  rotateY(random(0, PI));
  fill(random(0, 255), random(0, 255), random(0, 255),
       random(80, 100))
  stroke(random(0, 255), random(0, 255), random(0, 255));
  box(random(0, window_w / 4));
  pop();
}

function rand_plane(x, y) {
  push();
  translate(x, y);
  fill(random(0, 255), random(0, 255), random(0, 255),
       random(95, 100))
  rotateX(random(0, 360));
  rotateY(random(0, 360));
  rotateZ(random(0, 360));
  plane(random(0, window_w / 2));
  pop();
}

function rand_cone(x, y) {
  push();
  translate(x, y);
  normalMaterial();
  stroke(100);
  fill(random(0, 255), random(0, 255), random(0, 255),
       // random(80, 100)
      )
  rotateX(random(0, 360));
  rotateY(random(0, 360));
  rotateZ(random(0, 360));
  cone(random(0, window_w / 10), random(window_w / 3, window_w / 2));
  pop();
}
