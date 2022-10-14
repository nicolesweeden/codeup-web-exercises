"use strict";

// Create a file named break_and_continue.js in the js directory.
//
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

let userInput = prompt("Enter an odd number between 1 and 50")
//check if number is odd
if(userInput % 2 !== 0) {
    console.log("The number " + userInput + " is odd.");
}
for (var i = 1; i <=50 ; i++) {

    if (i % 2 == 0) {
        continue;
    } else if(userInput == i) {
        continue;
    }

    console.log('Here is a lovely odd number: ' + i);
}