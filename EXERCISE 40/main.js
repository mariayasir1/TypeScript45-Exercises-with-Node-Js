//exercise 40
function make_album(artistName, albumTitle) {
    var dictionaries = {
        artistName: artistName.charAt(0).toUpperCase() + artistName.slice(1),
        albumTitle: albumTitle.charAt(0).toUpperCase() + albumTitle.slice(1)
    };
    return dictionaries;
}
;
var aA1 = make_album("Ali Zafar", "jab me had se aagay");
console.log(aA1);
aA1 = make_album("RahatFateh", "mere pass tum ho");
console.log(aA1);
aA1 = make_album("Chahat Fateh", "ahha");
console.log(aA1);
