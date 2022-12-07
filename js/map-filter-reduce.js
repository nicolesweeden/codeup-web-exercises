"use strict";
(() => {

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//first, declare a variable and set it equal to the objects we want to filter through (in this example, users are the objects?)
//second, set up function within parenthesis on line 46, filtering through users so use user as parameter. => means function. for user.languages.length i have to find location before finding the length.
//TIP do old way functions first and then refactor to arrow function.

let filteredLanguages = users.filter(user => user.languages.length >= 3);
console.log(filteredLanguages);

//Use .map to create an array of strings where each element is a user's email address.
//above - OMG it worked! https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know

let mappedEmails = users.map(user => user.email);
console.log(mappedEmails);

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//two step
// start w establishing a variable. will start at 0, will take two arguments bc what we get back is total number of years. second parameter is user. after arrow what gets returned at end of the function you get access years of experience property and add that to total.
// //ryan is first object

//Mess with this code below and change line 63 and see what gets spit out in console
// const experience = users.reduce((stack, user) => {
//    stack += 5
//    return stack
// }, {});
// console.log(experience);

const experience = users.reduce((stack, user) => {
    stack += 5
    return stack
}, {});
console.log(experience);

//Use .reduce to get the longest email from the list of users.



//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

//look at further reading for reduce method


})();