// conditionals-practice:

// Challenge 1 — Age checker
// Print whether the person is an adult or minor.

let age = 19;

if (age >= 18) {
    console.log(`Age is ${age}, so the person is adult!`);// True
} else {
    console.log(`Age is ${age}, so the person is minor!`);
}

// Challenge 2 — Positive / negative / zero
// Determine which one it is.

let number = -7;

if (number < 0) {
    console.log("The number is negative.");// True
} else if (number === 0) {
    console.log("The number is zero.");
} else {
    console.log("The number is positive.")
}

// Challenge 3 — Even / odd
// Determine whether it's even or odd.

number = 24;

if (number % 2 == 0) {
    console.log(`The number ${number} is even.`);// True
} else {
    console.log(`The number ${number} is odd.`)
}

// Challenge 4 — Grade calculator
/* Use if / else if / else:

90–100 → A
80–89  → B
70–79  → C
60–69  → D
< 60   → F
*/

const mark = 76;

if (mark >= 90) {
    console.log("A - Grade");
} else if (mark >= 80) {
    console.log("B - Grade");
} else if (mark >= 70) {
    console.log("C - Grade");// True
} else if (mark >= 60) {
    console.log("D - Grade");
} else {
    console.log("F - Grade");
}

// Challenge 5 — Login validation
// Use && to check whether both are correct.

const username = "admin";
const password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Loggin successful!");// True
} else {
    console.log("Your username or password is incorrect,\nTRY AGAIN!");
}

// Challenge 6 — Number range
// Check whether the number is between 1 and 100.

number = 45;

if (number >= 1 && number <= 100) {
    console.log(`The number ${number} is between 1 and 100.`);// True
} else {
    console.log("The number is out of range.");
}

// Challenge 7 — Logical operators
/* Create a condition that checks:

age >= 18 AND hasLicense === true

Print whether the person can drive. */

age = 21;
hasLicense = true;

if (age >= 18 && hasLicense === true) {
    console.log("The person can Drive!");// True
} else {
    console.log("The person cannot Drive!");
}




console.log("\n\n\n");

