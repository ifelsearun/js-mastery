// Challenge 1: Count numbers greater than 30

let numbers = [12, 45, 7, 89, 23, 56, 34, 10];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 30) {
        count += 1;
    }
}

console.log(`count = ${count}`);// count = 4



// Challenge 2: Calculate the average

numbers = [10, 20, 30, 40, 50];

let sum = 0;

let size = numbers.length;

for (let num = 0; num < size; num++) {
    sum += numbers[num];
}
console.log(`Sum : ${sum}`);
console.log(`Average : ${sum / size}`);