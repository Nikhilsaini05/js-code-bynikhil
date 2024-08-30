// Topic Globle & Local scope => '{}'

// Globle scope decleare outside the {}

let a = 10;
// console.log(a);

// Local scope declare inside the {}

if (true) {
    let a = 3;
    const b = 5;
    
}

// console.log(c);

// Nested scope

function one() {        
    const userName = "Nikhil";
    function two() {
        const website = "Github";
        console.log(userName);
    }
console.log(website);

}





