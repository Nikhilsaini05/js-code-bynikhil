// array 

const myArray = [0, 1, 2, 3, 4, 5];
const myHero = ["spiderman","Ironman"];

const myArray2 = new Array(1, 2 , 3, 4);
// console.log(myArray[4]);
// console.log(myHero[1]);


// Array methods
myArray.push(6);
// console.log(myArray);

// slice & splice

console.log("A", myArray);
//new array
const myn1 = myArray.slice(1,3);
console.log(myn1);

console.log("b", myArray);

const myn2 = myArray.splice(1,3);
console.log(myn1);
console.log(myn2);



