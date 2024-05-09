// choose 2 of the programs that you`ve written, and add atleast 1 comment to each.
// if you don`t have any specific to write because your programs are too simple at this point,
//  just add your name and current date at the top of each program file. then write 1 sentance
//  describing what the program does.

    //  ARGUMENTS AND PARAMETERS 

function fullName(name1:string, name2:string):string{
    return `${name1} ${name2}`;       //name1 + name2;  this one is wrong
    //concordination is the right way to add strings together  
}
let printName = fullName("maria","yasir")
console.log(printName);



function greet(){
    return "hello World";
}
                          //hello world
let message =greet();    //we use variable instead of console it`ll help us further
console.log(message);    
console.log(greet());

let  girlBeautiful = true;
 let girlRich =false;
//    true      or    false = true
 if(girlBeautiful || girlRich){
    console.log("eligible");
 }
//  cannot write code between if and else 
else{
    console.log("rejected!!");
}
