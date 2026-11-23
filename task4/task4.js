const prompt = require("prompt-sync")()

// REFACTORING for REUSABILITY
// Step 1. Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided, the function should subtract the discount from the total cost before applying tax.
// Step 2. If no discount is provided, calculate the total cost as before.

// Declare the parameters
let price = 5
let quantity = 6
let taxRate = 0.07
// discount parameter
let discount = 0

// Write the function with 3 params
function calculateTotalCost (price, quantity, taxRate, discount) {
    // Condition check if params are numbers — had to learn the typeof operator to get it to check if the value was a string or number
    if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number') {
        return "Invalid input."
    } 
    // Calculate the initial price befor tax
    let subtotal = price * quantity

    // Apply discount if it's a valid number
    if (typeof discount === 'number' && discount > 0) {
        return (subtotal - discount) * (1 + taxRate)
    } else {
        let totalCost = ((price * quantity) * (1 + taxRate))
        return totalCost
    }
}
// Invoke the function
console.log(calculateTotalCost(price, quantity, taxRate, discount))

// I have no idea if this is right