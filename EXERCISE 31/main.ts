//exercise 31

let users:string[]=["Maria","Azra","Admin","Khairun","Fareeha"];


//to remove all members
users=[]
if(users.length > 0){
    for(let i = 0; i < users.length ; i++){
         if(users[i] == "Admin"){
            console.log(`\n Hello ${users[i]} would to like to see a status report? \n`);
         }
         else{
        console.log(`hello ${users[i]} thank you for logging in again`);
        }
    } 
}
 else{
    console.log("we need to find some users!");
 };