"use strict";

//#2 Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// function showMultiplicationTable (num) {
//     for (let i = 1; i <= 10; i++)
//     console.log(num + " x " + i + " = " + (num * i));
// }
// showMultiplicationTable(5)

//below code is a little different than what was being asked but this was my first attempt at #2
// for (var multiplier = 0; multiplier <= 10; multiplier++) {
//     for (var i = 0; i <= 10; i++) {
//         var result = multiplier * i;
//         console.log(multiplier + ' * ' + i + ' = ' + result);
//     }
// }
//
// // https://www.teaching-materials.org/javascript/exercises/forloops

// #3: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:


function exerciseThree() {
    for (let i = 0; i <= 10; i++) { //establishes value of our iterator; condition bc i<=10; change that happens to iterator
        let num = Math.floor(Math.random() * (201 - 20)) + 20; //new num variable w a differnet value
        if (num % 2 == 0) {
            console.log("The number " + num + " is even!");
        } else {
            console.log("The number " + num + " is odd!");
        }}}
exerciseThree() //this is the function call