var bubbles = [];

var updatendisplay = function(Bubble) {
  Bubble.update();
  Bubble.display();
};

setup = function () {
  createCanvas(600, 600);
};

draw = function () {
  background(0);
  bubbles.forEach(updatendisplay);
  while (bubbles.length < 500) bubbles.push(new Bubble(random(5, width - 5), random(5, height - 5)));
  // this code makes it so that all bubbles are fully visible
  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));
};
