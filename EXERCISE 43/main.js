//exercise 43
//define function to show magicians nammes
function showMagician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magician great through .map() it'll modify aaray
function makeGreat(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians = ["Gian", "Nobita", "yamini", "Shuzuka"];
//making a copy of original arraythrough .slice() function
var copyMagicianNames = magicians.slice();
//modify the copy array to include the great with theirname
var copyGreatMagicians = makeGreat(copyMagicianNames);
//show both arrays
showMagician(magicians);
showMagician(copyGreatMagicians);
