(function () {
    "use strict";


//Warmup 10/20/22
    // Write a function that when passed an object will return the value of the object’s price property.
    //     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
    // getPrice(obj); // returns “$7.89”

    // let apples = new Object();
    // apples.price = "1.99"
    // getPrice(apples)

    function price (object) {
        return object.price
    }

    let apples = {
        name: "apples",
        quantity: 3,
        price: "1.99"
    };
    console.log(getPrice(apples));


    //Warmup 10/21/22
    // Write a function that when passed an array will return the longest string from the array.
    //     Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
    // getLongestString(arr) // Returns “Periwinkle”

    //David's solution: study this bc there will be something similar on assessment. this is a "bucket" problem.

    function getlongestString(arr) {
        let longestStr = "";
        for (let str of arr) {
            if (str.length > longestStr.length) {
                longestStr = str;
            }
        }
        return longestStr;
    }

    const colors = ["Pink", "Lavender", "Ecru"];
    console.log(getlongestString(colors));


//Warmup 10/26/22
// Write a function that takes in an array of objects and returns the object with the largest height property.

    const hamsters = [
        {
            name: "Hamtaro",
            heightInMM: 86,
            fur: ['orange', 'white'],
            gender: "male",
            dateOfBirth: "August 6"
        }, {
            name: "Bijou",
            heightInMM: 75,
            fur: ['white'],
            gender: "female",
            dateOfBirth: "July 10"
        }, {
            name: "Oxnard",
            heightInMM: 100,
            fur: ['grey', 'white'],
            gender: "male",
            dateOfBirth: "May 3"
        }, {
            name: "Boss",
            heightInMM: 120,
            fur: ['brown', 'white'],
            gender: "male",
            dateOfBirth: "September 21"
        }, {
            name: "Snoozer",
            heightInMM: 85,
            fur: ['brown', 'white', "pink"],
            gender: "male",
            dateOfBirth: "January 14"
        }
    ];

    getTallestHamster(hamsters); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};
//My answer (returns undefined):
//     function  getTallestHamster (arr) {
//         return Math.max(heightInMM);
//     }

    //will end up with object with highest height property. similar to the get longest string (above). David's answer:

    function getTallestHamster(arr) {
        let tallest = {heightInMM: 0};
        arr.forEach(function (el) { //creating a loop. will use forEach for this (for looping through an array)
            if (el.heightInMM > tallest.heightInMM) {
                tallest = el;
            }
        })
        return tallest;
    }

console.log(getTallestHamster(hamsters));

//Warmup for 10/31

    // Warmup: Write FizzBuzz from 1-100;
    // Numbers evenly divisible by 3 should be replaced by Fizz
    // Numbers evenly divisible by 5 should be replaced by Buzz
    // Numbers evenly divisible by both 3 and 5 should be replaced by FizzBuzz
    // All other numbers should be printed in the console.


    let f = "fizz";
    let b = "buzz";
    for (let num = 1; num <=100 ; num++) {
        if (num% 3 === 0 && num % 5 ===0){
            console.log(num + f + b);
        }
        else if (num % 5 === 0){
            console.log(num+b);
        }
        else if (num % 3 === 0){
            console.log(num+f);
        }
        else {
            console.log(num);
        }
    }










    //Don't delete bottom of IIFE
})();