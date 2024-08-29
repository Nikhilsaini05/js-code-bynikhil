// E-commer site cart add problem
// with the hepl of rest operater
function calculateCartPrise(...num1) {                  // ... is a rest operater
    return num1
}
console.log(calculateCartPrise(200, 400, 500));

// we can also add variable in this

function calculateAnotherCartPrise(var1,var2,...num1) {                  // ... is a rest operater
    return num1
}
console.log(calculateAnotherCartPrise(200, 400, 500,700));

// object used in function

const user1 ={
    userName : "Nikhil",
    age      : 25,
    course   : "MCA"
}

function handleobject(anyobject) {
    console.log(`Username is ${anyobject.userName} its age is ${anyobject.age} and he take addmission in ${anyobject.course} course`);
}

handleobject(user1);

// we can also pass object after the creation of function

function handleobject2(anyobject) {
    console.log(`Username is ${anyobject.userName} its age is ${anyobject.age} and he take addmission in ${anyobject.course} course`);
}

handleobject2({
    userName : "Rajat",
    age      :  23,
    course   : "MCA"
});

// array 
const myArray = [10, 20, 30 ,40, 50, 60]

function returnArray(getarray){
    return getarray[1];
}

console.log(returnArray(myArray));


