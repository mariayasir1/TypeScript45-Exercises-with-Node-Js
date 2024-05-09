//exercise 37

function make_shirt(size:string = "large" ,  label: string="I love Typescript"):string{
    return `you order a ${size} szie that says ${label}`
 };

 let lShirt= make_shirt
console.log(lShirt());

 let mShirt = make_shirt("Medium");
 console.log(mShirt);

 let sShirt= make_shirt("Small", "samll fits me best");
 console.log(sShirt);

