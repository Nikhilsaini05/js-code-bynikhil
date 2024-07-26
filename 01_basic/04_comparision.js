// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1); 

console.log("2" > 1);
console.log("02" > 1);

// Avoid this type of compersion
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);         // conversion undefined in to zero

console.log(undefined > 0);
console.log(undefined == 0);        
console.log(undefined >= 0);     

// === => strightly check
console.log("1" === 0);