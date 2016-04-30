var Bubble = function (x, y) {
  this.x = x;
  this.y = y;
};

Bubble.prototype = {

  radius: 5,

  update: function() {
    this.x += random(-1, 1);
    this.y += random(0, -5);
    if (this.y < this.radius * -2) this.y = this.radius * 2 + height;
    // once the bubbles disappear completely from the screen they appear 10 pixels below the bottom of the screen and rise up again. 
  },

  display: function () {
    noStroke();
    fill(102, 217, 255, 100);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

};
