//EXERCISE 45
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //add optional options
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the functionto create object    // 1 string me 2 values
var myCar = createCar("Honda", "corolla", "Color:Black", "sunRoof:True", "Year:2024");
console.log(myCar);
