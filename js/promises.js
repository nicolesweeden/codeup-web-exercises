"use strict";
(() => {

const GH_KEY2 = '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';

// 1. Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

    function lastCommit(user) {
        return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `token ${GH_KEY2}`}})
            .then((data) => {
                // console.log(data);
                return data.json()
            }).then((jsonData) => {
                // console.log(jsonData); //returns array of objects with dates

                return "User " + jsonData[0].actor.display_login + " last committed to GitHub on " + jsonData[0].created_at + "."
            })
    }

    lastCommit('nicolesweeden').then((data) => console.log(data));


// ========================================Example============================================
//
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('this is the eventual value the promise will return');
//         }, 300);
//     });
//
//     console.log(myPromise);
//
//
// =================================Another Example===========================================
//
//     const anotherPromise = Promise.resolve("this is the eventual value the promise will return")
//
//     console.log(anotherPromise);
//
// both from https://www.freecodecamp.org/news/what-is-promise-in-javascript-for-beginners/
//
// =====================================End of example========================================


// 2. Create Your Own Promise
//
// a. Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

const wait = secs => new Promise((resolve, reject) => setTimeout(resolve, secs));
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// b. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic. DONE!

})();
