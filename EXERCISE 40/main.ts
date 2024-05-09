//exercise 40

function make_album(artistName: string , albumTitle: string):{artistName: string , albumTitle: string}{
    const dictionaries ={
        artistName: artistName.charAt(0).toUpperCase() + artistName.slice(1) ,
        albumTitle: albumTitle.charAt(0).toUpperCase()+ albumTitle.slice(1)
    }
    return dictionaries
};

let aA1 = make_album("Ali Zafar", "jab me had se aagay");
console.log(aA1);

aA1 = make_album("RahatFateh","mere pass tum ho");
console.log(aA1);

aA1 = make_album("Chahat Fateh","ahha");
console.log(aA1);
