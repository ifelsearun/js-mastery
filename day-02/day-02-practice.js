
// Challenge 1: Day of the week
let day = Number(prompt("Enter a number (1-7): "));

switch (day) {
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid!");

}



// Challenge 2: Simple calculator

const a = Number(prompt("Enter a: "));

const b = Number(prompt("Enter b: "));

const operator = prompt("Enter operator (+,-,*,/): ");

switch (operator) {
    case "+":
        console.log(`a + b = ${a + b}`);
        break;

    case "-":
        console.log(`a - b = ${a - b}`);
        break;

    case "*":
        console.log(`a * b = ${a * b}`);
        break;

    case "/":
        console.log(`a / b = ${a / b}`);
        break;

    default:
        console.log("Invalid operator!");
}


// Challenge 3: Age eligibility

const age = Number(prompt("Enter you age: "));

let canVote = age >= 18 ? "You are eligible to vote!" : "You are NOT eligible to vote!";

console.log(canVote);


// Challenge 4: Even or odd

const number = Number(prompt("Enter a number: "));

let answer = number % 2 === 0 ? "Number is Even" : "Number is Odd";

console.log(answer);


// Challenge 5: Compare two numbers

const first = 45;
const second = 23;

let result = first > second
    ? "first is greater"
    : first < second
        ? "second is greater"
        : " Both are equal";

console.log(result);

// Challenge 6: Grade Calculator

const mark = Number(prompt("Enter your marks (0-100): "));

if (Number.isNaN(mark) || mark < 0 || mark > 100) {
    console.log("Please enter a valid mark between 0 and 100.");
} else {
    result = mark >= 90
        ? "your grade is A"
        : mark >= 80
            ? "your grade is B"
            : mark >= 70
                ? "your grade is C"
                : mark >= 60
                    ? "your grade is D"
                    : "Fail"
}

console.log(result);