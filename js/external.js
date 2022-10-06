"use strict";

console.log('Hello from JavaScript!');

alert("Happy Thorsday Xerxes");

// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false

alert ('Welcome to my Website!');

var userInput = prompt('What is your favorite color?:');
console.log('Great!'+ userInput + 'is my favorite color too!');

//Movies
let theLittleMermaid = 3;
prompt('How many days did you rent The Little Mermaid?');
let brotherBear = 5;
prompt('How many days did you rent Brother Bear?');
let Hercules = 1;
const priceeach = 3;
let total = theLittleMermaid + brotherBear + Hercules;
let cost = priceeach + total;
alert (cost);

//Pay this week
let Google = 400 * 6; let Amazon = 380 * 4; let Facebook = 350 * 10;
let paymentThisWeek = Google + Amazon + Facebook
alert (paymentThisWeek);

//Class enrollment
alert("Let's enroll in class!");
let classFull = confirm("is the class full?");
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

//Offer premium member
let premiumMember = confirm("Are you a premium member?");
let thingsBought = prompt("Are you purchasing 2 or more items?");

if (premiumMember = true) {
    alert("You qualify for our product offer!");
}

else if (premiumMember = false && thingsBought >= 2) {
    alert("You qualify for our product offer!");
}

else () {
    alert ("Sorry, you do not qualify for our product offer.");
}
