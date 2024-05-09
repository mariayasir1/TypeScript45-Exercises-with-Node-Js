   //EXERCISE 44

   function sandwich(...items: string[]){
    console.log( " \n we are gonna make a sandwich with the following items: \n");

    items.forEach(singleitem => console.log(singleitem));

    console.log("\n now enjoy Sandwich \n");
   }

   //call the fuction 3 times with different number of arguments
   sandwich("Chicken", " cheese", "boil Egg", "Mayo");
   sandwich("Butter" , "Honey");
   sandwich("bread" , "Butter" , "Mayo" , "Kebab" ,"Lettuce" , "cucumber");