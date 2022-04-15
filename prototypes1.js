const yoshi = { skulk: true };
const hattori = { sneak: true };
const kuma = { creep: true };

if ('skulk' in yoshi) console.log('Yoshi can skulk');
if (!('sneak' in yoshi)) console.log('Yoshi cannot sneak');
if (!('creep' in yoshi)) console.log('Yoshi cannot creep');

console.log('----- Set hattori as a prototype of yoshi -----');

Object.setPrototypeOf(yoshi, hattori);
if ('sneak' in yoshi) console.log('Yoshi can now sneak');
if (!('creep' in hattori)) console.log('Hattori cannot creep');

console.log('----- Set kuma as a prototype of hattori -----');
Object.setPrototypeOf(hattori, kuma);
if ('creep' in hattori) console.log('Hattori can now creep');
if ('creep' in yoshi) console.log('Yoshi can also creep');
