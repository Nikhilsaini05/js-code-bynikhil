// Topic Globle or loca variable     scope => '{}'
function one() {
    const userName = "Nikhil"

    function two() {    
        const website = "youtube";
        console.log(userName);
    }
    two();
}

one();

// same use in if condition

if (true) {
        const userId = "saini@908";
        if (userId === "saini@908") {
            const num = " 121212";
            const website = " Github";
            console.log(userId + num + website);
        }
}