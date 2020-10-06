function preload() {
  r = loadImage("a4.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  r.resize(windowWidth, 0);
  tiles = 210;
  background(255);

  tile = width / tiles;
  dia = tile * 0.9 * 0.5;
  noStroke();

  for (let i = 0; i < width / tile; i++) {
    for (let j = 0; j < height / tile; j++) {
      [x, y] = [i * tile, j * tile + 100];

      bright = brightness(r.get(x, y));
      b2 = Math.ceil(bright > 100 ? 255 : map(bright, 64, 127, dia, 0));

      // console.log(bright, b2);
      b3 = map(Math.ceil(brightness(r.get(x, y))), 127, 195, dia, 0);

      fill(b2 > dia - 1 ? b2 : (255, 4, 4, 10));
      ellipse(x, y - 100, b2, b2);
      fill("#12121212");
      ellipse(x - 4, y - 100, b3, b3);
    }
  }
}

function draw() {
  // tiles = map(frameCount * 11, 0, windowWidth, 10, 100);
}

function mouseClicked() {
  noLoop();
}

function mouseReleased() {
  loop();
}
