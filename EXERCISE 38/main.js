//exercise 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(city, " is in ").concat(country);
}
;
var forKarachi = describe_city("Karachi");
console.log(forKarachi);
var forLahore = describe_city("Lahore");
console.log(forLahore);
var forJadda = describe_city("Jedda", "Saudia");
console.log(forJadda);
