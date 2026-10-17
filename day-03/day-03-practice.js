// Challenge 1: Will the condition run?

if ("0") {
    console.log("Hello");// 'Hello'
} else {
    console.log("Goodbye");
}

if ("") {
    console.log("Hello");
} else {
    console.log("Goodbye");// 'Goodbye'
}


let value = 0;

if (value) {
    console.log("True");
} else {
    console.log("False");// 'False'
}


value = "false";

if (value) {
    console.log("True");// 'True'
} else {
    console.log("False");
}


// Challenge 2: Positive, negative, or zero

let number = Number(prompt('Enter a number: ', 0));

if (Number.isNaN(number)) {
    console.log('Enter a valid number!')
} else if (number < 0) {
    console.log('Negative');
} else if (number > 0) {
    console.log('Positive');
} else {
    console.log('Zero');
}

// Challenge 3: Rewrite using the ternary operator

let temperature = 32;

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

if (Number.isNaN(age) || age <= 0) {
    console.log("Enter a valid age!")
} else {
    price = (age < 5)
        ? 'Free' : (age <= 17)
            ? '₹100' : (age <= 59)
                ? '₹200' : '₹120';
}
console.log(`Your ticket price is ${price}, enjoy the movie.`);


// Challenge 6: Rewrite multiple conditions

const score = 75;

let grade = (score >= 90)
    ? 'A' : (score >= 80)
        ? 'B' : (score >= 70)
            ? 'C' : (score >= 60)
                ? 'D' : 'F';

console.log(grade);

// challenge 7: login checker

const username = prompt("Enter your username: ", '').trim();
const password = prompt("Enter your password: ", '').trim();

let result;

if (username === '' && password === '') {
    result = "Please enter your username and password.";
} else if (username === '') {
    result = "Username is required.";
} else if (password === '') {
    result = "Password is required.";
} else if (username === 'student' && password === 'pass123') {
    result = "Login successful!";
} else {
    result = "Invalid username or password.";
}

alert(result);