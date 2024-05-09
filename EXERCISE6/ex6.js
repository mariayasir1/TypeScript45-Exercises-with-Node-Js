"use strict";
// stripping names: store aperson`s name and include some whitespace character at the beginning and end
//  of the name . make sure you use eachcharacter combinations "\t" and "\n" at least once . print the
// name once , so the whitespace around the nae is displayed,
// then print the name after striping the white spaces.
let personname = "\t\n maria yasir \n\t";
console.log("original:", personname);
console.log("stripped:", personname.trim());
