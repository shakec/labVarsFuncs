const prompt = require("prompt-sync")()
// TASK 1: FLEXIBLE STRING MANIPULATION w/ FUNCTIONS

// Step 1: Create function w/ two params
// Step 2: Format params so that the first letter of each is capitalized
// Step 3: Add condition that checks if first or last name is missing. Return "Invalid name input" if missing.
let firstName = prompt("what's your first name? ")
let lastName = prompt("and your last name? ")

// console.log(`My name is ${firstName} ${lastName}`)
function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        console.log("Invalid name input.")
    } else {
        console.log(`My name is ${lastName[0].toUpperCase() + lastName.slice(1)}, ${firstName[0].toUpperCase() + firstName.slice(1)}.`)
    }
}
// Call the function
formatFullName( firstName, lastName)
