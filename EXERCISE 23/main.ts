//exercise 23

let car="suburu";
console.log(car == `suburu`);  //1st

console.log("is car != 'honda City'? predict true");    //2nd
console.log(car != `honda City`);

console.log("is car == 'Suburu'? predict false");       //3rd       //as we  change the case of Saburu 
console.log(car == `Suburu`);

console.log("is car == 'suburu'? predict true");        //4th
console.log(car == `suburu`);

console.log("is car.length ==6? predict true");         //5th
console.log(car.length == 6);

console.log("is car.length ==4? predict false");        //6th
console.log(car.length == 4);

console.log("is car.length !=6? predict false");        //7th
console.log(car.length != 6);

// console.log("is car.length <=6? predict true");
// console.log(car.length <= 6);
 

let numbers=[1,2,6];
console.log("length of numbers.length ==3? predict true");  //8th 
console.log(numbers.length==3);

console.log("length of numbers.length ==4? predict false"); //9th 
console.log(numbers.length==4);


let number= 3
console.log("length of number<3? predict false");        //10th
console.log(number<3);                                 

console.log("length of number<=3? predict true");       //11th
console.log(number<=3);