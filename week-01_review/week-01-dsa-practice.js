const numbers = [12, 45, 7, 89, 23, 56];

// 1. find the lasrgest number

let size = numbers.length;

let largest = numbers[0];

for (let i = 0; i < size; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]
    };
};

console.log(`Largest number: ${largest}`);


// 2. Find the smallest numbe

let smallest = numbers[0];

for (let num = 0; num < size; num++) {
    if (numbers[num] < smallest) {
        smallest = numbers[num]
    };
};

console.log(`Smallest number is: ${smallest}`);


// 3. Calculate the sum

let sum_total = 0;

for (num = 0; num < size; num++) {
    sum_total += numbers[num];
};

console.log(`Total sum is: ${sum_total}`);


// 4. Count even numbers

let count = 0;

for (num = 0; num < size; num++) {
    if (numbers[num] % 2 === 0) {
        count += 1
    };
};

console.log(`Even numbers: ${count}`);