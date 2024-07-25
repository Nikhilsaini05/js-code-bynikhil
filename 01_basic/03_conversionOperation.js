// let score = "33abc";
let score = null;
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof (valueInNumber));
console.log((valueInNumber));

// when we convert a number it will easily convery in to number
// ex-: "33" => 33
// when we convert a numberWithAbc it will NOt convery in to number
// ex-: "33abc" => NaN  (not a number)
// If i enter true =>1; & false => 0;

let isLoggedIn = "nikhil";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// value & Result
// 1 => true; 0 => false;
// "" => false;
// "nikhil" => true;