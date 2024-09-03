// Find month 

const month = 9

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("fabuary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("october");
        break;
        case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;

    default:
            console.log("not matched");
            
        break;
}

// Truthy & Falsy value
const userEmail = "nikhil@#2.in"

if (userEmail) {
    console.log("Got user email");   
} else{
    console.log("don't have user email");  
}

// false values 
// false,0,-0,BigInt,0n,"",null,undefine,nan

// truthy value
// "false",'0'," ",[],{},function(){}

/*********** Nullish Coalescing Operator(??): null undefine *************/

let val1;
// val1 = 5 ?? 10
//  val1 = null ?? 10
  val1 = undefined ?? 10

console.log(val1);

