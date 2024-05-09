// exercise 30


let users:string[]=["Maria","Azra","Admin","Khairun","Fareeha"];


//1st method
for(let l=0; l < users.length; l++){
    if(users[l] == "Admin"){
        console.log(`hello ${users[l]}, would you like to see a status report?`);
    }
    else{
        console.log(`thank you ${users[l]} for logging in again`);
    }
};

// 2nd method
for(let user of users){
if(user == "Admin"){
    console.log(`hello admin, would you like to see a status report?`);
}
else{
    console.log(`thank you ${users} for logging in again`);
}
};