const prompt = require("prompt-sync")()

// FUNCTIONS w/ CONDITIONAL LOGIC
// Step 1. Write a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules:
    // ▴  If the person is over 18 and employed, they are eligible.
    // ▴  If the person is over 18 but unemployed, they are conditionally eligible.
    // ▴  If the person is 18 or younger, they are not eligible.
// Step 2. Return an appropriate string message for each scenario.

// Declare variables
let age = prompt("What is your age? ")
let employment = prompt("Are you currently employed? ")
let isEmployed = (employment !== null && employment.toLowerCase() === "true")
// The function
function checkEligibility(age, isEmployed){
    // Write condition checking if person is eligible based on requirements
    if (age > 18 && isEmployed === true) {
        return "You are eligible."
    } else if (age > 18 && isEmployed === false) {
        return "You are conditionally eligible"
    } else {
        return "Sorry, you are NOT eligible."
    }
    return
}
console.log(checkEligibility(age, isEmployed))