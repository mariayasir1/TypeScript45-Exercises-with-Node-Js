//EXERCISE 42

//define function to show magicians nammes
function showMagician(magician : string[]):void{
    magician.forEach(names => console.log(names));
}
//function to make magician great through .map() it'll modify aaray
function make_great(magicians :string[]){
    return magician.map(name => `The Great ${name}` );
}
//define array of magician names
let magician: string[] =["Gian" , "Nobita" , "yamini", "Shuzuka"];

// call make great to modify magicians names
let great_magician=make_great(magician);

//call show magicians that shows modified list
showMagician(great_magician);

