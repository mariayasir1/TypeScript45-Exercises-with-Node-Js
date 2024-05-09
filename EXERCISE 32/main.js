//exercise 32
var current_users = ["maria", "Azra", "admin", "Khairun", "Fareeha"];
var new_users = ["Admin", "Maria", "Fatima", "Yasir", "Eric"];
// loop  throygh new user to check for users availability
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) {
        return current_one_user.toLowerCase() === new_one_user.toLowerCase();
    });
    //print different messages using if else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
