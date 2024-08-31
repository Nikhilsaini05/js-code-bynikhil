// Immediately Invoked Function Expressions (IIFE)

// simple function
function chai() {
    username = "nikhil"
    console.log(username);
}

chai();

// IIFE - The function that immediately Executied
// Imp - "Sometimes globle scope polution create problems
//         like veriables etc... to solve this problem we use IIFE "

(function chai() {
    username = "Saini"
    console.log(username);
})();

// lets take one more Example 

(one = (connection) => {
    console.log(`DB Connection two ${connection}`);
    
})("NETWORK");