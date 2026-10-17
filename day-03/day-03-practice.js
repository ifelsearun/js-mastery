// Challenge 1: Will the condition run?

if ("0") {
    console.log("Hello");
} else {
    console.log("Goodbye");
}

if ("") {
    console.log("Hello");
} else {
    console.log("Goodbye");
}


let value = 0;

if (value) {
    console.log("True");
} else {
    console.log("False");
}


value = "false";

if (value) {
    console.log("True");
} else {
    console.log("False");
}


// Challenge 2: Positive, negative, or zero

let number = Number(prompt('Enter a number: ', 0));

if (number < 0) {
    console.log('Negative');
} else if (number > 0) {
    console.log('Positive');
} else {
    console.log('Zero');
}

// Challenge 3: Rewrite using the ternary operator

const temperature = 32;

let message = (temperature >= 30) ? "It's hot!" : "It's not too hot.";

console.log(message);


// Challenge 4: Find the greater number

const a = 45;
const b = 45;

let greatest = (a > b)
    ? 'a is greatest' : (b > a)
        ? 'b is greatest' : 'Both are equal';

console.log(greatest);


// Challenge 5: Movie ticket pricing 🎬

let age = Number(prompt('Enter your age: '));

let price;

if (age <= 0) {
    console.log("That's an unusual age!")
} else {
    price = (age < 5)
        ? 'Free' : (age <= 17)
            ? '₹100' : (age <= 59)
                ? '₹200' : (age >= 60)
                    ? '₹120' : 'age not entered';
}
console.log(price);


// Challenge 6: Rewrite multiple conditions

const score = 75;

let grade = (score >= 90)
    ? 'A' : (score >= 80)
        ? 'B' : (score >= 70)
            ? 'C' : (score >= 60)
                ? 'D' : 'F';

console.log(grade);

