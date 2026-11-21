// MATH OPERATIONS w/ MULTI-PARAMS

// Step 1. Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
// Step 2. The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
// Step 3. Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”

// Declare the parameters
let price = "5"
let quantity = 6
let taxRate = 0.07

// Write the function with 3 params
function calculateTotalCost (price, quantity, taxRate) {
    // Condition check if params are numbers — had to learn the typeof operator to get it to check if the value was a string or number
    if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number') {
        return "Invalid input."
    }
    // Save value
    let totalCost = ((price * quantity) * (1 + taxRate))
    return totalCost 
}
// Invoke the function
console.log(calculateTotalCost(price, quantity, taxRate))


// function calculateTotalCost ( price, quantity, taxRate ) {
//     if (
//         // the typeof operator 
//         typeof price !== "number" || !Number.isFinite(price) ||
//         typeof quantity !== "number" || !Number.isFinite(quantity) ||
//         typeof taxRate !== "number" || !Number.isFinite(taxRate)
//     ) {
//     console.log("Invalid input.")
// } else {
//     console.log((price * quantity) * (1 + taxRate))
// }
    
// }
// console.log(`your total with tax is ${totalCost}`)


