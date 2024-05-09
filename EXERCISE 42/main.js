//EXERCISE 42
function showMagician(magician) {
    magician.forEach(function (names) { return console.log(names); });
}
function make_great(magicians) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician = ["Gian", "Nobita", "yamini", "Shuzuka"];
var great_magician = make_great(magician);
showMagician(great_magician);
