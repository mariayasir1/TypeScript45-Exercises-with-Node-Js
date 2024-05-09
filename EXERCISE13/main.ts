// think of your favourite mean of transportation. such as motorcyle , a car and make a list
// that stores several examples. use your list to print a series of statements about these items 
//,such as "i would like to own a HONDA motorcycle".


let favTransports:string[] = ["aeroplane","helicopter","bullettrains", "cars"];

                //   1st method (loop)
for (let j=0 ; j <=3 ; j++){
    console.log (`I would like to own ${favTransports[j]}`)
};
// 2nd method will be use in exercise 14
favTransports.map((i)=>{
    console.log(`i would like to own a ${i}`)
});
    

