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

let number = Number(prompt('Enter a number: '));

if (number < 0) {
    console.log('Negative');
} else if (number > 0) {
    console.log('Positive');
} else {
    console.log('Zero');
}
