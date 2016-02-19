var Raindrop = function (x, y) {
  this.x = x;
  this.y = y;
};

Raindrop.prototype = {

  linelength: 5,
  linelengthModify: 3,
  speed: 1,

  update: function() {
    this.x -= this.speed * random(2, 5);
    this.y += this.speed * random(2, 5);
    if (this.y > height) this.y = this.length * -1;
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
  },


};
