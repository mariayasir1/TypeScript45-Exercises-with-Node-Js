//exercise 32
let current_users: string[] = ["Maria", "Azra", "Admin", "Khairun", "Fareeha"];
let new_users: string[] = ["Admin", "Maria", "Fatima", "Yasir", "Eric"];

// loop  throygh new user to check for users availability

new_users.forEach((new_one_user) => {
    let our_condition = current_users.some(current_one_user=>
          current_one_user.toLowerCase() === new_one_user.toLowerCase())
//print different messages using if else statements
if (our_condition){
    console.log(`Sorry ${new_one_user} is already taken`)
}    
else{
    console.log(`This username ${new_one_user} is available`)
}       
        
});
      
        
    
  
  

