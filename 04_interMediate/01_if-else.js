// // control Flow

// // If       // ">"less than, "<"greater than,"<=" less than equal to,
//             // ">=" greater than equal to,"==" equal to,"!="Not equal,"!=="
// const isUserloggedIn = true
// if (3 === 3){
//     console.log("True"); 
// } else {
//     console.log("False");
// }
// // If- Else another example

// const marks = 100
// const score = 45
// if(score < 33){
//     console.log("pass");
// } else {
//     console.log("Fail");
// }
// // Nested If
//  const number = 86
//  if(number > 90){
//     console.log("O");
//  } else if(number > 80){
//     console.log("A");
//  }else if(number > 70){
//     console.log("B");
//  }else if(number > 50){
//     console.log("B");
//  }else if(number > 40){
//     console.log("D");
//  }else {
//     console.log("Fail");
//  }

// Real Life Example - Shoping

const isUserloggedIn = true    // kya user log in hua site pa :- true/false
const debitCaed = true         // kya user ke pass debit card hai :- true/false
const loggedInFormGoogle = false
const loggedInFormEmail = true
if (isUserloggedIn && debitCaed) {   // condition - user must have login on shopingsite
                                    // and he/she must have debit card then we allow to shop
    console.log("allow to buy");    // "&&" - (or) both condition must be true                                     
}

if (loggedInFormGoogle || loggedInFormEmail) {   // "||" used for check multipal condition
    console.log("user logged in");               // one condition is true in it
    
}