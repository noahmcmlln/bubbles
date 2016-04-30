var bubbles = [];

setup = function () {
  createCanvas(600, 600);
  // your code goes here
};

draw = function () {
  background(0);

  var index = 0;
  while (index < bubbles.length){
    bubbles[index].update();
    bubbles[index].display();
    index++;
  };

  if (mouseIsPressed) bubbles.push(new Bubble(mouseX, mouseY));
  // your code goes here
};
