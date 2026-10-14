
const numbers = [12, 45, 7, 89, 23, 56];

// find the number of even numbers

let count = 0;

for (let num = 0; num < numbers.length; num++) {
    if (numbers[num] % 2 === 0) {
        count = count + 1;
    }
}

console.log(count);


