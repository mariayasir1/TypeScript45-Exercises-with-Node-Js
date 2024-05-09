//exercise 31
var users = ["Maria", "Azra", "Admin", "Khairun", "Fareeha"];
//to remove all members
users = [];
if (users.length > 0) {
    for (var i = 0; i < users.length; i++) {
        if (users[i] == "Admin") {
            console.log("\n Hello ".concat(users[i], " would to like to see a status report? \n"));
        }
        else {
            console.log("hello ".concat(users[i], " thank you for logging in again"));
        }
    }
}
else {
    console.log("we need to find some users!");
}
;
