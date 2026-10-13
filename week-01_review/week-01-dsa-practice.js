const numbers = [12, 45, 7, 89, 23, 56];

// 1. find the lasrgest number

let size = numbers.length;

let largest = numbers[0];

for (let i = 0; i <= size; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]
    }
}

console.log(`Largest number: ${largest}`)