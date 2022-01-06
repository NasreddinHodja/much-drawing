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
  fill(random(0, 100), random(0, 180), random(0, 20),
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
  plane(random(0, window_w / 2), random(0, window_w / 2));
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
  cone(random(0, window_w / 10), random(window_w * 0.6, window_w * 0.9));
  pop();
}

function glitch() {
  push();
  // random glitch pixel length
  glitchlen = int(random(4,2400))*4;
  // edit the pixels array
  loadPixels();
  // channel shift?
  let channelshift = int(random(0,10));
  // loop over chunks
  for(let i = 0; i < g.width*g.height; i += glitchlen){
    // set all pixels in chunk to color of the first pixel
    for(let p = channelshift; p < glitchlen; p += 4){
      g.pixels[i+p] = pixels[i];
      g.pixels[i+p+1] = pixels[i+1];
      g.pixels[i+p+2] = pixels[i+2];
      g.pixels[i+p+3] = pixels[i+3];
    }
  }
  updatePixelsGL(g);
  image(g, random(-window_w, window_w), random(0, window_h));
  pop();
}

function updatePixelsGL(buf){
  // New empty image
  const img = new p5.Image(buf.width, buf.height);

  // Load like normal
  img.loadPixels();

  // Seems silly that you have to loop the pixels to copy them but I couldn't figure out another way
  for(let i =0; i<buf.pixels.length; i++){
    img.pixels[i] = buf.pixels[i];
  }

  // Update the pixels
  img.updatePixels();

  // write the data to the screen
  buf.image(img, -buf.width/2, -buf.height/2);
  delete img;
}
