// Challenge 1: Count numbers greater than 30

const numbers = [12, 45, 7, 89, 23, 56, 34, 10];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 30) {
        count += 1;
    }
}

console.log(`count = ${count}`);