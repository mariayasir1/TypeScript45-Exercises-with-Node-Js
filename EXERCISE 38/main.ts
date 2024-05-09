//exercise 38

function describe_city (city : string , country : string = "Pakistan"):string{
    return  `${city} is in ${country}`
};
 let forKarachi = describe_city("Karachi");
 console.log (forKarachi);

 let forLahore = describe_city("Lahore");
 console.log (forLahore);

let forJadda = describe_city("Jedda" , "Saudia")
 console.log (forJadda);