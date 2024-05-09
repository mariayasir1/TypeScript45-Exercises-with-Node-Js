"use strict";
//18
let placesToTour = ["saudia", "dubai", "canada", "europe", "Bangladesh"];
//  print the array in original order 
console.log("original Order:", placesToTour);
//alphabetical order without modifying the actual array
console.log("Alphabetic Order", [...placesToTour].sort());
//again in orginal order
console.log("OriginalOrder After Sorting", placesToTour);
//in reverse alphabetical order
console.log("ReverseAlphabetic Order", [...placesToTour].sort().reverse());
//again in original order
console.log("OriginalOrder After Reverse Sorting", placesToTour);
//reverse the order of the list
placesToTour.reverse();
console.log("Reversed order", placesToTour);
//reverse the order of the list again to get back to the original order
placesToTour.reverse();
console.log("Back to the original order", placesToTour);
//Sort the array in alphabetical order 
placesToTour.sort();
console.log("Sorted in Alphabetical order", placesToTour);
//sort the array in reverse alphabetical order 
placesToTour.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order", placesToTour);
