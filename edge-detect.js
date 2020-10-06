function preload() {
  r = loadImage("a4.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  r.resize(0, 800);
  tiles = 500;
  background(1);

  tile = width / tiles;
  dia = tile * 0.9 * 0.5;
  noStroke();

  data = [];
  mask = [];

  for (let i = 0; i < width / tile; i++) {
    ic = [];
    // console.log(i);
    for (let j = 0; j < height / tile; j++) {
      [x, y] = [i * tile, j * tile + 100];
      bright = brightness(r.get(x, y));
      b2 = Math.ceil(bright > 100 ? 255 : map(bright, 64, 127, dia, 0));
      ic.push(b2);
    }

    data.push(ic);
  }

  // Edge detection X
  tx = 5;
  w = 5;
  data.forEach((r, idxr) => {
    r.forEach((e, idx, r) => {
      delta = e - r[idx - 1];
      // fill(delta, 0, 0, 10);
      fill("#ff0000cf");
      // fill("#ffffff11");
      ellipse(idxr * tx, idx * tx, delta * w);
    });
  });

  data.forEach((r, idxr, row) => {
    r.forEach((e, idx, r) => {
      if (idxr > 0) {
        delta = e - row[idxr - 1][idx];
        fill("#0000ffcf");
        ellipse(idxr * tx, idx * tx, delta * w);
      }
    });
  });
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
