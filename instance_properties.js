function Ninja() {
  this.swung = false;
  this.swingSword = function () {
    return !this.swung;
  };
}

Ninja.prototype.swingSword = function () {
  return this.swung;
};

const ninja = new Ninja();
if (ninja.swingSword()) console.log('true');
