//exercise 35
//making a list of animals
var animals = ["Cow", "Dog", "Camel"];
//loop
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var i = animals_1[_i];
    console.log(i);
}
;
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var j = animals_2[_a];
    console.log("".concat(j, " is a domestic animal"));
}
;
console.log("All of these animals are halal");
