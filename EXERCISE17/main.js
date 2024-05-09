"use strict";
//assignment nuber 17
let friends = ["maria", "azra", "khairunnisa", "fareeha", "farah", "madiha", "fatima"];
console.log(`Due to limited space only 2 people invited for dinner\n`);
//removing last 4 friends until 2 remains
while (friends.length > 2) {
    const removeFriend = friends.pop();
    console.log(`sorry ${removeFriend} you're no longer invited`);
}
;
//printing invitations to the remaining guests
//method 1 
// for(let u=0;u<friends.length; u++){
//     console.log(`${friends[u]}! you're still invited for dinner today.`);
// };
//method 2
friends.forEach((friends) => {
    console.log(`${friends} you're still invited fort dinner`);
});
//removing last 2 friends
friends.pop();
friends.pop();
//printing the final list to confirm it's empty
console.log(friends);
