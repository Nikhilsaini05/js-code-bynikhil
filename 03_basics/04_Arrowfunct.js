const user = {
    name : "nikhil",
    prise : 999,

    welcomeMessage: function() {
        console.log(`${this.name}, welcome to website`);
        
    }
}
user.welcomeMessage()

// Arrow function

const one = () => {                                 // we can not use this inside a function
    let username = "NIkhil"
    console.log(this.username);
}

one();


// Explicit return

const addtwo = (num1, num2) => {
    return num1 + num2
}

console.log(addtwo(26 , 43));

// Implicit return 

const addthree = (nan1, nan2, nan3) =>  (nan1 + nan2 + nan3)

console.log(addthree(26 , 43, 31));

const sarname = () => ({name : "SAINI"})

console.log(sarname);
