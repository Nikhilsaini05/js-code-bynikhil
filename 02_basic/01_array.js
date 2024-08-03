// // array 

// const myArray = [0, 1, 2, 3, 4, 5];
// const myHero = ["spiderman","Ironman"];

// const myArray2 = new Array(1, 2 , 3, 4);
// // console.log(myArray[4]);
// // console.log(myHero[1]);


// // Array methods
// myArray.push(6);
// // console.log(myArray);

// // slice & splice

// console.log("A", myArray);
// //new array
// const myn1 = myArray.slice(1,3);
// console.log(myn1);

// console.log("b", myArray);

// const myn2 = myArray.splice(1,3);
// console.log("c", myArray);
// console.log(myn2);


const newArr = ["RAM","Sham","Rohan","Sohan","Meena","Teena"];

console.log("ARRAY", newArr);
// Push Method - Use for enter new value
newArr.push("Riya");
console.log("PUSH", newArr);
//POP Method - Use for remove value
newArr.pop();
console.log("POP", newArr);
// unshift - Add value in starting & shift use for remove value from starting
newArr.unshift("NAME of student - ");
console.log("unshift", newArr);
// Join - convert in to String
const myArr = newArr.join();
console.log(myArr);
// slice & splice
const myNa1 = ["A", "B", "C", "D", "E", "F"];
console.log(myNa1);

const myn1 = myNa1.slice(0,3);
console.log("slice", myn1);

const myn2 = myNa1.splice(0,2);
console.log(myNa1);
console.log("splice", myn2);



