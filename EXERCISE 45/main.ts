   //EXERCISE 45


   function createCar(manufacturer : String, model : String, ...options ){
    let car = {
        manufacturer : manufacturer,
        model : model,
    }
    //add optional options
    options.forEach(option => {
        let[key, value] = option.split(":");
        car[key.trim()]= value.trim();
    })
    return car ;
   }
    //call the functionto create object    // 1 string me 2 values
   let myCar= createCar("Honda", "corolla","Color:Black" , "sunRoof:True" , "Year:2024");

   console.log(myCar);

