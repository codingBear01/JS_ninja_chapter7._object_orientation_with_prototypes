class Person {
  constructor(name) {
    this.name = name;
  }

  dance() {
    return true;
  }
}

class Ninja extends Person {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
  }

  wieldWeapon() {
    return true;
  }
}

console.log('----- person -----');
const person = new Person('Bob');

if (person instanceof Person) console.log("A person's a person");
if (person.dance()) console.log('dance');
if (person.name === 'Bob') console.log('name is Bob');
if (!(person instanceof Ninja)) console.log('not Ninja');
if (!('wieldWeapon' in person)) console.log('no wieldWeapon');

console.log('----- ninja -----');
const ninja = new Ninja('Yoshi', 'Wakizashi');

if (ninja instanceof Ninja) console.log('Ninja');
if (ninja.wieldWeapon) console.log('wield a weapon');
if (ninja instanceof Person) console.log('also Person');
if (ninja.name === 'Yoshi') console.log('Yoshi!');
if (ninja.dance()) console.log('ninja dance!');
