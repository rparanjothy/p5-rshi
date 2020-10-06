function preload() {
  r = loadImage("a4.jpg");
}

function setup() {
  createCanvas(800, 600);
  // r.resize(windowWidth * 0.7, windowHeight * 0.7);
  r.resize(800, 0);
}

function draw() {
  background(255);
  // tiles = map(frameCount * 11, 0, windowWidth, 10, 100);
  tiles = 100;

  tile = width / tiles;
  dia = tile * 0.9 * 0.5;

  b = [];
  for (let i = 0; i < width / tile; i++) {
    for (let j = 0; j < height / tile; j++) {
      [x, y] = [i * tile, j * tile];

      // b.push(Math.ceil(brightness(r.get(x, y))));
      // b = map(brightness(r.get(x, y)), 0, 63, dia, 0);
      // strokeWeight(b);
      // stroke("ff0110aa");
      // point(x, y, b, b);

      // b1 = map(Math.ceil(brightness(r.get(x, y))), 64, 127, dia, 0);
      // stroke("#11ee0063");
      // strokeWeight(b1);
      // point(x, y, b1, b1);

      // b2 = map(brightness(r.get(x, y)), 127, 196, dia, 0);
      // b2 = map(Math.ceil(brightness(r.get(x, y))), 128, 196, dia, 0);
      // b2 = map(Math.ceil(brightness(r.get(x, y))), 64, 127, dia, 0);

      bright = brightness(r.get(x, y));
      b2 = Math.ceil(bright > 100 ? 255 : map(bright, 64, 127, dia, 0));

      // console.log(bright, b2);
      b3 = map(Math.ceil(brightness(r.get(x, y))), 127, 195, dia, 0);

      // stroke("#000000aa");
      // strokeWeight(b2);
      // point(x, y, b2, b2);
      fill(b2 > dia - 1 ? b2 : 255, 0, 0, 100);
      noStroke();
      ellipse(x, y, b2, b2);

      // ellipse(x, y, b3, b3);
      // console.log(b2, brightness(r.get(x, y)));
      // fill("red");
      // b3 = map(brightness(r.get(x, y)), 196, 255, 0, dia);

      // ellipse(x, y, b3 / 2, b3 / 2);
    }
  }
}

function mouseClicked() {
  noLoop();
}

function mouseReleased() {
  loop();
}
