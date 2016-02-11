var bubbles = [];

var updatendisplay = function(Bubble) {
  Bubble.update();
  Bubble.display();
};

setup = function () {
  createCanvas(600, 600);
  // your code goes here
};

draw = function () {
  background(0);
  bubbles.forEach(updatendisplay);
  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));
  // your code goes here
};
