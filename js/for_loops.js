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


// function exerciseThree() {
//     for (let i = 0; i <= 10; i++) { //establishes value of our iterator; condition bc i<=10; change that happens to iterator
//         let num = Math.floor(Math.random() * (201 - 20)) + 20; //new num variable w a differnet value
//         if (num % 2 == 0) {
//             console.log("The number " + num + " is even!");
//         } else {
//             console.log("The number " + num + " is odd!");
//         }}}
// exerciseThree() //this is the function call


//#4 Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 99999999

// for (var i = 1; i <=9 ; i++) {
//     console.log(i)
// }
//=========
// var divLength = ('div').length;
//
// var str = '';
// for(var i = 0; i < divLength; i++) {
//     str += "Div #" + i + ", ";
//     console.log(str);
// }
//=========
// i cant figure out how to get this one to show the nu,bers correctly, they're coming out as 1, 12, 123, 1234, etc. but this is my final answer for #4
// let str = "";
// for (let i = 1; i <=9 ; i++) {
//     str += "" + i;
//     console.log(str)
// }

//#5 OMG it worked!
let i = "";
for (i = 100; i > 0; i-=5) {
    console.log(i);
}

