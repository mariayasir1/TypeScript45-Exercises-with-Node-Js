// exercise 28

let personAge:number = 18

if(personAge < 2){
    console.log("Person is a baby");
}
else if(personAge == 2 || personAge < 4){
    console.log("Person is a toddler");
}
else if(personAge == 4 || personAge < 13){
    console.log("Person is a kid");
}
else if(personAge == 13 || 20 > personAge){
    console.log("Person is a teenager");
}
else if (personAge == 20 || personAge < 65){
    console.log("Person is an adult");
}
else{
    console.log("you are soon in Paradise");
};