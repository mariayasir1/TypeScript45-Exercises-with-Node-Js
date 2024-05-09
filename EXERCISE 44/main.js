//EXERCISE 44
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log(" \n we are gonna make a sandwich with the following items: \n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\n now enjoy Sandwich \n");
}
//call the fuction 3 times with different number of arguments
sandwich("Chicken", " cheese", "boil Egg", "Mayo");
sandwich("Butter", "Honey");
sandwich("bread", "Butter", "Mayo", "Kebab", "Lettuce", "cucumber");
