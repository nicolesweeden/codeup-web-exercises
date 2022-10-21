(function () {
    "use strict";


//Warmup 10/20/22
    // Write a function that when passed an object will return the value of the object’s price property.
    //     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
    // getPrice(obj); // returns “$7.89”

    // let apples = new Object();
    // apples.price = "1.99"
    // getPrice(apples)

    function price(object) {
        return object.price
    }

    let apples = {
        name: "apples"
        quantity: 3,
        price: "1.99"
    };
    console.log(getPrice(apples));


    //Warmup 10/21/22
    // Write a function that when passed an array will return the longest string from the array.
    //     Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
    // getLongestString(arr) // Returns “Periwinkle”


//["Pink", "Lavender", "Ecru"]
    let longest = arr.reduce(
        function (a, b) {
            return a.length > b.length ? a : b;
        }
    );
    console.log(longest);

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











    //Dont delete bottom of IIFE
})();