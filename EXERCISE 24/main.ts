//exercise 24


//test for equality and inequality with strings
// '=' is used for assign but '==' used for comparison
let medicine1=("PANADOL");
let medicine2=("panadol 12+");
let medicine3=("panadol infants");

if(medicine1==medicine2){
    console.log("medicines names are equal");
}
else{
    console.log("medicines names are not equal");
};

if(medicine1!=medicine2){
    console.log("medicines names are not equal");
}
else{
    console.log("medicine names are equal");
};

//test using the lower case function
console.log(medicine1=="PANADOL");
console.log(medicine1=="Panadol");

// numerical test involving,greater than and less than , greater than and equal to, less than
//or equal to
let numb= 10
console.log(numb == 10);
console.log(numb !== 10); //not equal to
console.log(numb > 8);
console.log(numb < 8);
console.log(numb <= 10);
console.log(numb >= 10);


//tests using "and" and "or" operators
//      and &&    or    ||
let num1= 5;
let num2 = 15;
console.log(num1 < num2 && num1 > 2 );    //true
console.log(numb > num1 || num1 < num2);   //true

//test whether an item is in an array
let myArray=[2,4,6,8,"maria"];
console.log(Array.isArray(myArray));      //true

// test whether an item is not in an array 
let myString= "yasir";
console.log(Array.isArray(myString));    //false