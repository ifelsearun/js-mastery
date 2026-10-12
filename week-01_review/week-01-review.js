// 1. Variables and arithmetic
let a = 10;
a = 25;
console.log(a * 2);// 50

// 2. Type conversion
console.log("5" + 2);// 52
console.log("5" - 2);// 3

// 3. Operator precedence
console.log(2 + 3 * 4);// 14

// 4. Template literals
const name = "Arun";
console.log(`Hello, ${name}!`);// Hello, Arun

// 5. String methods
const language = "JavaScript";
console.log(language.length);// 10
console.log(language.toUpperCase());// JAVASCRIPT
console.log(language.slice(0, 4));// Java
console.log(language.includes("Script"));// true

// 6. review TOP lesson

console.log(2 > 12);// false
console.log("2" > "12");// true
console.log(null == undefined); true
console.log(null == "\n0\n");// false
console.log(5 === "5");// false
console.log(10 > 5 && 10 < 20);// true
console.log(!(5 > 10));// true