       //exercise 43

       //define function to show magicians nammes
  function showMagician(magicians : string[]){
    magicians.forEach(name => console.log(name));
   }

   //function to make magician great through .map() it'll modify aaray
   function makeGreat(magicians : string[]){
     return magicians.map( name => `The Great ${name}`);
   }

   let magicians: string[] = ["Gian" , "Nobita" , "yamini", "Shuzuka"];

   //making a copy of original arraythrough .slice() function

   let copyMagicianNames = magicians.slice()

//modify the copy array to include the great with theirname

 let copyGreatMagicians = makeGreat(copyMagicianNames);

 //show both arrays

 console.log("original Array");
 showMagician(magicians);

 console.log("Copied Array");
 showMagician(copyGreatMagicians);