"use strict"; // treat all js code as js newer version
//alert("2+2") //we are using node js, Not browser

/* Data Types */            // Premetive Data Types

let name = "nikhil";        // string 
let age = 22;               // numeric
let isLoggedIn = true;      // boolean 
let state;                  // undefined
                            // symbol => unique identifie
                            // null => stand-alone value
console.log(typeof null);
console.log(typeof true);

                            // NON- premetive data type         (Reference type)
// Array , object , function
const hero = [ " iramman" , "spiderman" , "antman" ];       // Array
let myobj = {                                               // object
    name : "Nikhil", 
    age: 22
};
                                                            // Function
const Function = function(){
    console.log("Hello World");
}

// ******************************** Memory ************************************

// Stack Memory ( Premetive )               ( ~copy)
let myName = "Nikhil";

let anotherName = myName;
anotherName ="Saini";

console.log(myname);
console.log(anotherName);

// Heap Memory ( Non-premetive )           ( ~Reference)
let userone ={
email : "user@google.com" ,
upi   : "user@ybl"
}

let usertwo = userone;
usertwo.email= "nikhilsaini@gmail.com";

console.log(userone);
console.log(usertwo);