var rain = [];

var updatendisplay = function(Raindrop) {
  Raindrop.update();
  Raindrop.display();
};

setup = function () {
  createCanvas(600, 600);
  // your code goes here
};

draw = function () {
  background(0);
    rain.forEach(updatendisplay);
    if (mouseIsPressed) rain.push(new Raindrop(mouseX, mouseY));
  // your code goes here0
};
