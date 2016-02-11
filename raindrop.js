var Raindrop = function (x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
};

Raindrop.prototype = {

  length: 25,

  update: function() {
    this.x1 += random(0, 600);
    this.y1 += random(400, 600);
    this.x2 += this.x1 - length;
    this.y2 += this.y2 + length;
  },

  display: function () {
    line(this.x1, this.y1, this.x2, this.y2);
  }

};
