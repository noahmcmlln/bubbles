var Raindrop = function (x, y) {
  this.x = x;
  this.y = y;
};

Raindrop.prototype = {

  linelength: 5,
  linelengthModify: 3,


  update: function() {
    this.x += random(-5, -2);
    this.y += random(2, 5);
    if (this.y > this.height) this.y = this.linelength * -1;
    if (this.x < 0) this.x = this.width;
  },

  display: function () {
    noStroke();
    fill("blue");
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x, this.y + this.linelengthModify);
    vertex(this.x - this.linelength, this.y + this.linelength);
    vertex(this.x - this.linelength, this.y + this.linelength + this.linelengthModify);
    endShape();
    console.log("Drawing rain at " + this.x + ", " + this.y);
  },


};
