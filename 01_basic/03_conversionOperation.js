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

let somenumber = "33";
let stringNumber = String(somenumber);
console.log(stringNumber);
console.log(typeof (stringNumber));

// ******************** Operation *******************************

let var1 = "Nikhil";
let var2 = " Saini";
let var3 = var1 + var2;
console.log(var3);

// console.log(2 + 2);      // Addition operation
// console.log(2 - 2);      // subtration operation
// console.log(2 * 2);      // multipication operation
// console.log(2 ** 3);     // Power operation
// console.log(2 % 2);      // modules operation

let num1 = num2 = num3 = 2 + 3;     // Not a good way to write a code 
console.table([num1, num2, num3]);

console.log(2 + "2");
console.log("2" + 2);
console.log("2" + 2 + 3);       // If there is any string come first it will add the next string
                                // with first one &...
console.log(2 + 2 + "3");       // If and operation come first,So first it perform operation and 
                                // then add the string with it.

let gameScore = 99;
// gameScore++;
++gameScore;
console.log(gameScore);





