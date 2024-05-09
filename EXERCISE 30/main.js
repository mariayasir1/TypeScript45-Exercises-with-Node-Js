// exercise 30
var names = ["Maria", "Azra", "Admin", "Khairun", "Fareeha"];
//1st method
for (var l = 0; l < names.length; l++) {
    if (names[l] == "Admin") {
        console.log("hello ".concat(names[l], ", would you like to see a status report?"));
    }
    else {
        console.log("thank you ".concat(names[l], " for logging in again"));
    }
}
;
// 2nd method
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    if (name_1 == "Admin") {
        console.log("hello admin, would you like to see a status report?");
    }
    else {
        console.log("thank you ".concat(names, " for logging in again"));
    }
}
