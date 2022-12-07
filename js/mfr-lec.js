const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

const names = hamsters.map(hamster => hamster.name);
console.log(names);

const doubledNumbers = numbers.map((num) => {
    return num * 2;
});
console.log(numbers);

// i am getting numbers is not defined for above


//....missing stuff here



//
const tallestHamster = hamsters.reduce((tallHamster, hamster) => {
    if (hamster.heightInMM > tallHamster.heightInMM) {
        tallHamster = hamster;
    }
    console.log(tallHamster);
    return tallHamster
}, {heightInMM: 0})

console.log(tallestHamster);

//another example but this comes from curriculum but instead of using dot notation were using square brackets
function countWords(sentence) {}

//