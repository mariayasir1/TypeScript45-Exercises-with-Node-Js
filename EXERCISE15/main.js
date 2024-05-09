"use strict";
//you just heard that one of your guests can`t make the dinner . so you need to send out a new set 
//of invitations. you`ll have to think of someone else to invite.
//start yourprogram from exercise 14 . add  a print statement at the end of your program
//stating the name of the guest who can`t make it.
//modify your list.replacing the name of the guest whocan`t make it with the name of the new person
//you`re inviting. print a 2nd set of invitation messages, 1 for each person who is still in your list.
let friends = ["maria", "azra", "khairunnisa", "fareeha", "farah"];
console.log(`${friends[3]} will not come today due to some personal reasons`);
friends[3] = "farwa";
console.log('NEW LIST OF MY FRIENDS THAT ARE COMING TO MY DINNER');
for (let j = 0; j < friends.length; j++) {
    console.log(`${j}. ${friends[j]}`);
}
