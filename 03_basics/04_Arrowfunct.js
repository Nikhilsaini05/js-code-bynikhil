const user = {
    name : "nikhil",
    prise : 999,

    welcomeMessage: function() {
        console.log(`${this.name}, welcome to website`);
        
    }
}
user.welcomeMessage()