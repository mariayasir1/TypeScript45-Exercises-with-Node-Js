//exercise 37
function make_shirt(size, label) {
    if (size === void 0) { size = "large"; }
    if (label === void 0) { label = "I love Typescript"; }
    return "you order a ".concat(size, " szie that says ").concat(label);
}
;
var lShirt = make_shirt;
console.log(lShirt());
var mShirt = make_shirt("Medium");
console.log(mShirt);
var sShirt = make_shirt("Small", "samll fits me best");
console.log(sShirt);
