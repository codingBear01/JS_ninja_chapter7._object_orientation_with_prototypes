function Ninja() {}
const ninja = new Ninja();

if (typeof ninja === 'object') console.log('type of ninja is object');
if (ninja instanceof Ninja) console.log('ninja is instance of Ninja');
if (ninja.constructor === Ninja) console.log("ninja's constructor is Ninja");

console.log(ninja.constructor);
