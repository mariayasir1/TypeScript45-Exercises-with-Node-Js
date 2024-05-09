// you just found a bigger table , so now more space is available. think of three more guests
// to invite to dinner.Start with excercise 15 . add a print statement to the end of your program
//  informing people that you found a bigger dinner table.
// add 1 new guest to the beginning of your array.
// add 1 new guest to the middle of your array.
// use append to add 1 new guest to the end of your list.
// print a newset of invitations messages.

let friends:string[]=["maria","azra","khairunnisa","fareeha", "farah"];
console.log(friends);

console.log("we are inviting 3 more friends");

// adding 3 more friends
// in the beginning
 friends.unshift("madiha");
 console.log(`${friends}`);

 //middle
 friends.splice(2,0,"fatima");
 console.log(`${friends}`);
 
 // at the end 
 friends.push("hina");
 console.log(`${friends}`);

for(let h=0; h<friends.length; h++){
    console.log(`${friends[h]}! your presence will be highly appreciated.`)
}
    