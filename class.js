// both codes are completely same

class Ninja {
  constructor(name) {
    this.name = name;
  }

  swingSword() {
    return true;
  }
}

function Ninja(name) {
  this.name = name;
}

Ninja.prototype.swingSword = function () {
  return true;
};

function print() {
  console.log('damedane dameyo damenanoyo');
}
