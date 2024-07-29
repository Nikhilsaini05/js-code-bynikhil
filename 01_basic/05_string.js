const myName = "Nikhil";        // decleared string
const score = " 1605";

// console.log(myName + score + " good");       //old type 

console.log(`Hello my name is ${myName} and my Gpat score is ${score}, it is a good score`);

// another way to declear string
const gameName = new String('cashofclans');

// Sttring Methods
console.log(gameName.length);               // 1.Length
console.log(gameName.toLowerCase());        // 2.Lowercase
console.log(gameName.charAt(2));            // 3.Charat
console.log(gameName.indexOf('b'));         // 4.Index
console.log(gameName.substring(0,2));       // 5.Subscript
console.log(gameName.slice(0,3));           // 6.Slice

const newString = "      nikhil   ";        // 7.Trim
console.log(newString);
console.log(newString.trim());

