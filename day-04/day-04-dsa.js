// Challenge 1: Count Even and Odd Numbers

const numbers = [12, 45, 7, 99, 89, 23, 56, 56, 34, 10];

let evenCount = 0;

let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenCount += 1;
    } else if (numbers[i] % 2 !== 0) {
        oddCount += 1;
    }
}

console.log(`Even count ${evenCount}`);
console.log(`Odd count ${oddCount}`);