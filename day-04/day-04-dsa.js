// Challenge 1: Count Even and Odd Numbers

const numbers = [12, 45, 7, 89, 23, 56, 34, 10];

let evenCount = 0;

let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount += 1;
    } else if (numbers[i] % 2 !== 0) {
        oddCount += 1;
    }
}

console.log(`Even count ${evenCount}`);
console.log(`Odd count ${oddCount}`);



// Challenge 2: Find the Second-Smallest Distinct Number

const numbers1 = [12, 45, 7, 89, 23, 56];

let smallest = Infinity;
let secondSmallest = Infinity;

for (let num = 0; num < numbers1.length; num++) {
    if (numbers1[num] < smallest) {
        secondSmallest = smallest;
        smallest = numbers1[num];
    } else if (numbers1[num] < secondSmallest && numbers1[num] > smallest) {
        secondSmallest = numbers1[num];
    }
}

console.log(`Smallest : ${smallest}`);
console.log(`Second smallest : ${secondSmallest}`);