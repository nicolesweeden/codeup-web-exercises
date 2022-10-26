"use strict";

console.log('Hello from JavaScript!');

alert("Happy Thorsday Xerxes");

// the following line will show the OK/CANCEL confirm dialog
let confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false

alert ('Welcome to my Website!');

let userInput = prompt('What is your favorite color?:');
console.log('Great!'+ userInput + 'is my favorite color too!');


//Exercise 3 from previous lesson: Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

// 3A) You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

let theLittleMermaid = 3;
prompt('How many days did you rent The Little Mermaid?');
let brotherBear = 5;
prompt('How many days did you rent Brother Bear?');
let Hercules = 1;
const priceEach = 3;
let total = theLittleMermaid + brotherBear + Hercules;
let cost = priceEach + total;
alert (cost);



// 3B) Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let Google = 400 * 6; let Amazon = 380 * 4; let Facebook = 350 * 10;
let paymentThisWeek = Google + Amazon + Facebook
alert (paymentThisWeek);



// 3C) A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
alert("Let's enroll in class!");
let classFull = confirm("Is the class full?");
let classUnavailable = confirm("Do your existing classes clash with this class time?");
let studentEnrolled = (!classFull && !classUnavailable);
if(studentEnrolled == true) {
    alert("You are now enrolled!")
}
else if (classFull && classUnavailable) {
    alert ("The class is full and you have other classes scheduled at this time.")
}
else if (classFull) {
    alert ("This class is full.");
}
else if (classUnavailable) {
    alert ("You have other classes scheduled during this time");
}

// 3D) A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let premiumMember = confirm("Are you a premium member?");
let thingsBought = prompt("Are you purchasing 2 or more items?");

if (premiumMember = true) {
    alert("You qualify for our product offer!");
}

else if (premiumMember = false && thingsBought >= 2) {
    alert("You qualify for our product offer!");
}

else {
    alert ("Sorry, you do not qualify for our product offer.");
}
