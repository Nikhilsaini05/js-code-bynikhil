// Object literals 

const newUser = { 
    name : "Nick",
    Number : 555-555-8888,
    email : "nick@google.com",
    isloggedin : false,
    age : 22
}
// console.log(newUser["email"]);

newUser.greeting = function(){
    console.log("hello js user");
}
console.log(newUser.greeting());

newUser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(newUser.greetingtwo());


// Object singleton

const obj1 = [1,2,3];
const obj2 = [4,5,6];
const obj3 = [7,8,9];

const allobj = [...obj1,...obj2,...obj3,10];

console.log(allobj);