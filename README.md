# JavaScript Foundations: Variables, Data Types, and Operators

A comprehensive, production-grade reference guide and study document covering core JavaScript fundamentals: development setup, variable declarations and scoping, dynamic data typing, mathematical operations, operator precedence, increment/decrement rules, assignments, strict comparisons, and detailed practical exercise walkthroughs.

Grounded in curriculum material from **The Odin Project**, **JavaScript.info** (*Variables*, *Data types*, *Basic operators, maths*), and **MDN Web Docs** (*Basic math in JavaScript*, *Handling text — strings in JavaScript*).

---

## 📋 Table of Contents
1. [Introduction & Environment Setup](#1-introduction--environment-setup)
2. [Variable Declarations & Scoping (`const`, `let`, `var`)](#2-variable-declarations--scoping-const-let-var)
3. [Data Types in JavaScript (The 8 Fundamental Types)](#3-data-types-in-javascript-the-8-fundamental-types)
4. [Maths & Arithmetic Operators](#4-maths--arithmetic-operators)
5. [Operator Precedence & Execution Order](#5-operator-precedence--execution-order)
6. [Increment & Decrement Operators (`++`, `--`)](#6-increment--decrement-operators---)
7. [Assignment & Compound Operators](#7-assignment--compound-operators)
8. [Comparison & Specialized Operators](#8-comparison--specialized-operators)
9. [Handling Text: Strings in JavaScript](#9-handling-text-strings-in-javascript)
10. [Hands-On Assignment Walkthroughs & Solutions](#10-hands-on-assignment-walkthroughs--solutions)
11. [Best Practices & Common Pitfalls Cheat Sheet](#11-best-practices--common-pitfalls-cheat-sheet)

---

## 1. Introduction & Environment Setup

### The Role of JavaScript
In modern web development:
- **HTML** defines the structure and content of the webpage.
- **CSS** controls the styling, layout, and visual presentation.
- **JavaScript** adds dynamic behavior, logic, data manipulation, and user interactivity.

### Running JavaScript Code

#### A. Inline Scripts
JavaScript can be embedded directly inside an HTML file using the `<script>` tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Foundations</title>
</head>
<body>

  <script>
    // Your JavaScript code executes here
    console.log("Hello, World!");
  </script>

</body>
</html>
```

#### B. External JavaScript Files
For maintainability and separation of concerns, keep JavaScript in standalone `.js` files and link them inside HTML:

```html
<script src="javascript.js"></script>
```

#### C. Developer Tools & Console
1. Right-click any webpage in your browser and select **Inspect** (or press `F12` / `Cmd+Option+I`).
2. Navigate to the **Console** tab.
3. Use `console.log()` to output variables, calculations, and diagnostic messages.

#### D. VS Code Live Preview / Live Server
Using editor extensions like **Live Preview** or **Live Server** in Visual Studio Code automatically refreshes the browser whenever you save your HTML or JS files.

---

## 2. Variable Declarations & Scoping (`const`, `let`, `var`)

A **variable** is a named storage container (or labeled memory box) for storing data in code.

```
+--------------------------+
|  Variable Name: username  |
|  Value: "John"           |
+--------------------------+
```

### Declaration Keywords

#### 1. `const` (Constant Declaration — Modern Default)
- **Reassignable**: ❌ No. Once assigned, its binding cannot be changed.
- **Scope**: Block-scoped (`{ ... }`).
- **Initial Value**: Must be initialized upon declaration (`const x = 10;`).
- **Best Practice**: **Always default to `const`** unless you know the value needs to change later.

```javascript
const PI = 3.14159;
// PI = 3.14; // Throws TypeError: Assignment to constant variable.
```

#### 2. `let` (Variable Declaration — Reassignable)
- **Reassignable**: ✅ Yes.
- **Scope**: Block-scoped (`{ ... }`).
- **Re-declaration**: Cannot be re-declared in the same scope (`let x = 1; let x = 2;` throws a `SyntaxError`).
- **Best Practice**: Use when you explicitly expect to reassign a variable later (e.g., counters, accumulated totals).

```javascript
let score = 10;
score = 15; // Valid reassignment
```

#### 3. `var` (Legacy Declaration — Avoid in Modern Code)
- **Reassignable**: ✅ Yes.
- **Scope**: Function-scoped or globally scoped (ignores block `{}` boundaries).
- **Hoisting Quirks**: Can be used before declaration (evaluates to `undefined`). Allows accidental re-declarations without error.
- **Best Practice**: **Avoid using `var`**. It is obsolete in modern JavaScript (ES6+).

### Variable Naming Rules & Conventions
1. **Allowed Characters**: Letters, digits, `$`, and `_`.
2. **First Character**: Must **not** start with a digit (e.g., `let 1a = 5;` is invalid).
3. **Case Sensitivity**: `apple` and `APPLE` are two entirely separate variables.
4. **CamelCase**: Multi-word names should use camelCase (e.g., `currentUserName`, `shoppingCart`).
5. **Reserved Words**: Language keywords (such as `let`, `const`, `return`, `function`, `class`) cannot be used as variable names.

### Uppercase Constants vs. Runtime Constants
- **Uppercase Constants (`COLOR_RED = "#F00"`)**: Used as hardcoded aliases for values known prior to execution.
- **Standard CamelCase Constants (`const pageLoadTime = calculateTime()`)**: Used for constant values calculated dynamically at runtime during execution.

---

## 3. Data Types in JavaScript (The 8 Fundamental Types)

JavaScript is a **dynamically typed language**. Variables are not bound to a fixed data type — a variable can hold a string at one moment and later be assigned a number:

```javascript
let data = "Hello"; // Currently a string
data = 42;          // Now a number (No error)
```

JavaScript features **8 fundamental data types**: 7 Primitives and 1 Non-Primitive (`object`).

---

### A. Primitive Data Types (Single Atomic Values)

#### 1. `number`
Represents integers and floating-point numbers up to $\pm(2^{53} - 1)$ (the safe integer range: `-9007199254740991` to `9007199254740991`).

```javascript
let age = 25;
let price = 99.99;
```

**Special Numeric Values**:
- **`Infinity` / `-Infinity`**: Represents mathematical infinity $\infty$. Generated by dividing by zero (`1 / 0`) or referencing directly.
- **`NaN` (Not a Number)**: Represents a computational error resulting from an invalid math operation (e.g., `"text" / 2`).
  - `NaN` is **sticky**: any mathematical operation on `NaN` returns `NaN` (e.g., `NaN + 5` $
ightarrow$ `NaN`).
  - *Exception*: `NaN ** 0` evaluates to `1`.

#### 2. `bigint`
Represents integers of arbitrary precision beyond the safe limit of $2^{53} - 1$. Created by appending `n` to the end of an integer:

```javascript
const bigInt = 1234567890123456789012345678901234567890n;
```

#### 3. `string`
Textual data enclosed in quotes. There is **no single-character type** in JavaScript (unlike `char` in C/Java); a single character is simply a string of length 1.

Three quote styles exist:
- **Single Quotes (`'...'`)**: Standard string literal.
- **Double Quotes (`"..."`)**: Standard string literal.
- **Backticks (Template Literals `` `...` ``)**: Extended functionality quotes allowing string interpolation via `${expression}`:

```javascript
let name = "Alice";
let greeting = `Hello, ${name}! 2 + 2 = ${1 + 1}`; // "Hello, Alice! 2 + 2 = 2"
```

#### 4. `boolean`
Logical data type with only two possible values: `true` or `false`.

```javascript
let isActive = true;
let isGreater = 4 > 1; // true
```

#### 5. `null`
A special standalone type containing only the value `null`. It explicitly represents "nothing", "empty", or "value unknown".

```javascript
let userAge = null; // Explicitly unknown
```

#### 6. `undefined`
A special standalone type containing only the value `undefined`. Indicates a variable that has been declared but not yet assigned a value.

```javascript
let userRole;
console.log(userRole); // undefined
```

#### 7. `symbol`
Used to create unique, immutable primitive identifiers for object properties.

```javascript
const id = Symbol("id");
```

---

### B. Non-Primitive Data Type

#### 8. `object`
Used to store key-value collections of data and more complex data entities (arrays, functions, dates, custom objects).

```javascript
let user = {
  name: "John",
  age: 30
};
```

---

### C. Type Checking with `typeof`

The `typeof` operator inspects a value or variable and returns its data type name as a string. Can be written as `typeof x` or `typeof(x)`:

```javascript
typeof undefined;   // "undefined"
typeof 0;           // "number"
typeof 10n;         // "bigint"
typeof true;        // "boolean"
typeof "foo";       // "string"
typeof Symbol();    // "symbol"
typeof { a: 1 };    // "object"

// Historical Language Quirks:
typeof null;        // "object"   (A known bug kept for backwards compatibility)
typeof alert;       // "function" (Functions belong to object, but return "function")
```

---

## 4. Maths & Arithmetic Operators

### Standard Arithmetic Operators

| Operator | Name | Purpose | Code Example | Output |
| :---: | :--- | :--- | :--- | :---: |
| **`+`** | Addition | Adds two numbers together | `6 + 9` | `15` |
| **`-`** | Subtraction | Subtracts right number from left | `20 - 15` | `5` |
| **`*`** | Multiplication | Multiplies two numbers | `3 * 7` | `21` |
| **`/`** | Division | Divides left number by right | `10 / 5` | `2` |
| **`%`** | Remainder (Modulo) | Returns remainder after integer division | `8 % 3` | `2` *(3 goes into 8 twice, 2 left over)* |
| **`**`** | Exponentiation | Raises base to an exponent power | `5 ** 2` | `25` *($5^2$)* |

> 💡 **Square & Cube Roots via Exponentiation**: Fractional powers calculate roots: `4 ** (1/2)` yields `2` (square root), and `8 ** (1/3)` yields `2` (cube root).

---

### String Concatenation vs. Numeric Conversion

#### 1. Binary `+` with Strings
If **either operand** in a binary `+` operation is a string, JavaScript converts the other operand to a string and concatenates them:

```javascript
"my" + "string"; // "mystring"
"1" + 2;         // "12"
2 + '1';         // "21"
```

**Evaluation Order Matters (Left-to-Right)**:
```javascript
2 + 2 + "1"; // "41" (Step 1: 2 + 2 = 4; Step 2: 4 + "1" = "41")
"1" + 2 + 2; // "122" (Step 1: "1" + 2 = "12"; Step 2: "12" + 2 = "122")
```

#### 2. Other Arithmetic Operators (`-`, `*`, `/`)
Unlike binary `+`, all other arithmetic operators **always convert string operands into numbers**:

```javascript
6 - "2";   // 4  (converts "2" to number 2)
"6" / "2"; // 3  (converts both to numbers)
"4px" - 2; // NaN ("4px" fails number conversion)
```

#### 3. Unary `+` Operator (Numeric Conversion Shorthand)
When applied to a single value, the unary `+` converts non-number operands into numbers (shorthand for `Number(...)`):

```javascript
+x;       // No effect if x is already a number
+"10";    // 10 (converts string "10" to number 10)
+true;    // 1
+"";      // 0

// Useful for converting HTML form/prompt inputs:
let apples = "2";
let oranges = "3";
console.log(+apples + +oranges); // 5 (converts both before binary +)
```

---

## 5. Operator Precedence & Execution Order

When an expression contains multiple operators, execution order is determined by **operator precedence** (larger number = executed first). Equal precedence operators evaluate left-to-right (except exponentiation and assignment, which evaluate right-to-left).

### Precedence Hierarchy (Extract)

| Precedence | Category / Operator Name | Operator Sign | Associativity |
| :---: | :--- | :---: | :---: |
| **18** | Grouping Parentheses | `()` | Left-to-Right |
| **15** | Postfix Increment / Decrement | `x++`, `x--` | Left-to-Right |
| **14** | Unary Plus / Negation / Prefix Inc | `+`, `-`, `++x`, `--x` | Right-to-Left |
| **13** | Exponentiation | `**` | **Right-to-Left** |
| **12** | Multiplication / Division / Modulo | `*`, `/`, `%` | Left-to-Right |
| **11** | Addition / Subtraction | `+`, `-` | Left-to-Right |
| **9** | Comparison Operators | `<`, `>`, `<=`, `>=` | Left-to-Right |
| **8** | Equality Operators | `===`, `!==`, `==`, `!=` | Left-to-Right |
| **2** | Assignment Operators | `=`, `+=`, `-=`, etc. | **Right-to-Left** |
| **1** | Comma Operator | `,` | Left-to-Right |

### Example Evaluation

```javascript
// Unparenthesized:
let val = 50 + 10 / 8 + 2; 
// 10 / 8 = 1.25 -> 50 + 1.25 + 2 = 53.25

// Parentheses override precedence:
let valFixed = (50 + 10) / (8 + 2); 
// (60) / (10) = 6
```

---

## 6. Increment & Decrement Operators (`++`, `--`)

Increases or decreases a numeric variable by `1`. **Can only be applied to variables** (e.g., `counter++`), not raw numbers (`5++` throws a SyntaxError).

- **Prefix Form (`++counter`)**: Increments the variable first, then returns the **new** updated value.
- **Postfix Form (`counter++`)**: Returns the **old** current value first, then increments the variable.

### Detailed Behavior Comparison

```javascript
// 1. Postfix Form (Returns old value)
let x = 1;
let a = x++; // 'a' receives 1, 'x' becomes 2
console.log(a); // 1
console.log(x); // 2

// 2. Prefix Form (Returns new value)
let y = 1;
let b = ++y; // 'y' becomes 2, 'b' receives 2
console.log(b); // 2
console.log(y); // 2
```

### Prefix vs Postfix in Expressions

```javascript
let counter = 1;
console.log(2 * ++counter); // 4 (counter incremented to 2 first: 2 * 2 = 4)

let count = 1;
console.log(2 * count++);   // 2 (count++ returns old value 1: 2 * 1 = 2, then count becomes 2)
```

> 💡 **Clean Code Rule**: Avoid embedding `++` or `--` inside complex expressions. Maintain a "one action per line" coding style for maximum readability.

---

## 7. Assignment & Compound Operators

The assignment operator `=` stores a value in a variable and **returns that value**.

### 1. Assignment Returns a Value
```javascript
let a = 1;
let b = 2;
let c = 3 - (a = b + 1); // (a = 3) evaluates to 3 -> c = 3 - 3 = 0
```

### 2. Chained Assignments
Evaluates **right-to-left**:

```javascript
let a, b, c;
a = b = c = 2 + 2; // Step 1: 2+2=4 -> c=4 -> b=4 -> a=4
```

### 3. Modify-in-Place (Compound Assignment Shorthands)

Apply an arithmetic operation and store the result back into the same variable:

| Operator | Syntax | Equivalent Code |
| :---: | :--- | :--- |
| **`+=`** | `n += 5` | `n = n + 5` |
| **`-=`** | `n -= 3` | `n = n - 3` |
| **`*=`** | `n *= 2` | `n = n * 2` |
| **`/=`** | `n /= 4` | `n = n / 4` |
| **`%=`** | `n %= 3` | `n = n % 3` |

Compound assignments share the same low precedence as basic assignment (`2`), executing after other mathematical calculations on the right-hand side:

```javascript
let n = 2;
n *= 3 + 5; // Evaluates (3 + 5 = 8) first -> n = n * 8 -> n = 16
```

---

## 8. Comparison & Specialized Operators

### Comparison Operators

Comparison operators run boolean tests and return `true` or `false`.

| Operator | Name | Purpose | Example | Result |
| :---: | :--- | :--- | :--- | :---: |
| **`===`** | Strict Equality | Tests value **AND** data type match | `5 === 5` | `true` |
| **`!==`** | Strict Inequality | Tests if value or data type differ | `5 !== "5"` | `true` |
| **`<`** | Less Than | Tests if left operand is smaller | `10 < 20` | `true` |
| **`>`** | Greater Than | Tests if left operand is larger | `10 > 5` | `true` |
| **`<=`** | Less Than or Equal | Tests lower bound | `5 <= 5` | `true` |
| **`>=`** | Greater Than or Equal | Tests upper bound | `5 >= 4` | `true` |

> ⚠️ **Strict vs. Loose Equality**: Avoid loose equality (`==` and `!=`) because they perform implicit type coercion (e.g., `0 == ""` is `true`, `false == "0"` is `true`). Always use strict equality (`===` and `!==`).

---

### Specialized Operators

#### 1. Bitwise Operators
Treat operands as 32-bit binary integers and operate on individual bits:
- **AND (`&`)**, **OR (`|`)**, **XOR (`^`)**, **NOT (`~`)**, **Left Shift (`<<`)**, **Right Shift (`>>`)**, **Zero-fill Right Shift (`>>>`)**.
- Used primarily in graphics, performance-critical binary algorithms, and cryptography.

#### 2. Comma Operator (`,`)
Evaluates multiple expressions from left to right, but **returns only the result of the last expression**:

```javascript
let a = (1 + 2, 3 + 4); // Evaluates 1+2=3, then 3+4=7. Returns 7.
```

---


---

## 9. Handling Text: Strings in JavaScript

In JavaScript, pieces of textual data are known as **strings**. While numbers handle calculations, strings allow programs to output custom messages, process user input, build dynamic HTML content, and format data.

---

### Declaring Strings & Quoting Rules

To create a string literal, wrap your text in quotation marks. Unquoted text is interpreted as a variable or keyword and will raise an error (`ReferenceError` or `SyntaxError`).

```javascript
// Valid string declarations
const string1 = "The revolution will not be televised.";
const string2 = 'The revolution will not be televised.';
const string3 = `The revolution will not be televised.`;

// Invalid declarations (Throws errors)
// const bad1 = This is a test;  // SyntaxError / ReferenceError
// const bad2 = 'This is a test; // Unterminated string literal
```

#### Matching Quotes
You **must** use matching quotation marks at both the start and end of a string:

```javascript
// Throws SyntaxError: Invalid or unexpected token
// const badQuotes = "This is not allowed!';
```

---

### Three Quote Types

| Quote Type | Syntax | Description / Key Features |
| :--- | :--- | :--- |
| **Single Quotes** | `'Hello'` | Standard string literal. Good for simple strings. |
| **Double Quotes** | `"Hello"` | Standard string literal. Functionally identical to single quotes. |
| **Backticks** | `` `Hello` `` | **Template Literal**: Supports interpolation (`${}`), multiline strings, and embedded expressions. |

---

### Template Literals & String Interpolation

Template literals (enclosed in backticks `` `...` ``) provide extended functionality over standard single/double-quoted strings.

#### 1. Embedding Variables & Expressions
Inside a template literal, use `${expression}` to insert variables or inline calculations dynamically:

```javascript
const name = "Chris";
const greeting = `Hello, ${name}!`; 
console.log(greeting); // "Hello, Chris!"

// Embedded Math Calculations:
const song = "Fight the Youth";
const score = 9;
const maxScore = 10;
const output = `I like the song ${song}. Score: ${(score / maxScore) * 100}%.`;
console.log(output); // "I like the song Fight the Youth. Score: 90%."
```

#### 2. Multiline Strings
Template literals automatically preserve line breaks directly in code:

```javascript
const poem = `One day you finally knew
what you had to do, and began,`;

console.log(poem);
/*
Output:
One day you finally knew
what you had to do, and began,
*/
```

> **Traditional Alternative**: To achieve multiline output in standard single or double-quoted strings, you must explicitly insert the newline escape character `\n`:
> ```javascript
> const poem2 = "One day you finally knew\nwhat you had to do, and began,";
> ```

---

### String Concatenation

Joining strings together is called **concatenation**.

#### 1. Template Literals (Recommended)
```javascript
const part1 = "Hello, ";
const part2 = "how are you?";
const joined = `${part1}${part2}`; // "Hello, how are you?"
```

#### 2. The Binary `+` Operator
```javascript
const greeting = "Hello";
const name = "Bob";
console.log(greeting + ", " + name + "!"); // "Hello, Bob!"
```

---

### Including Quotes & Escaping Characters

#### 1. Alternating Quote Styles
If your string contains quotes, the easiest solution is to wrap the string in a *different* quote type:

```javascript
const quote1 = 'She said "I think so!"';
const quote2 = `She said "I'm not going in there!"`;
```

#### 2. Escaping with Backslash (`\`)
If you must use the same quote type inside the string, prepend a backslash (`\`) to escape the quotation mark so JavaScript treats it as plain text rather than code syntax:

```javascript
const bigmouth = 'I've got no right to take my place…';
const quote3 = "She said "I think so!"";
```

#### Common Escape Sequences
- `\'` — Single quote
- `\"` — Double quote
- `\\` — Backslash
- `\n` — Newline (Line break)
- `\t` — Tab space

---

### Numbers vs. Strings & Type Conversions

#### 1. Implicit Coercion in Concatenation
When concatenating a string and a number using the `+` operator, JavaScript automatically converts the number into a string:

```javascript
const band = "Front ";
const number = 242;
console.log(band + number); // "Front 242" (Type: string)
```

#### 2. Explicit Conversion Functions

* **`Number(value)`**: Converts a string containing numeric characters into a number data type.
  ```javascript
  const inputString = "123";
  const num = Number(inputString); // 123 (Type: number)
  ```

* **`String(value)`**: Converts a number or other data type into a string.
  ```javascript
  const numValue = 123;
  const str = String(numValue); // "123" (Type: string)
  ```

---

## 10. Hands-On Assignment Walkthroughs & Solutions

Complete solution code for all curriculum exercises covering basic math, variable reassignment, and percentage calculations:

### Exercise 1: Basic Addition
```javascript
// Task 1: Add 2 numbers together
console.log(23 + 97); // Outputs: 120

// Task 2: Add 6 different numbers together
console.log(12 + 24 + 36 + 48 + 60 + 72); // Outputs: 252
```

### Exercise 2: Mathematical Precedence
```javascript
// Force addition before division using parentheses
console.log((4 + 6 + 9) / 77); // Outputs: 0.24675324675324675
```

### Exercise 3: Variable Declarations & Reassignments
```javascript
// Step 1: Declare variable 'a' and log it
let a = 10;
console.log(a); // Outputs: 10

// Step 2: Reassign 'a' with a new number value (without re-declaring let)
a = 25;
console.log(a); // Outputs: 25

// Step 3: Multiply by another variable
let b = 7 * a;
console.log(b); // Outputs: 175
```

### Exercise 4: Percentage Calculations using Constants
```javascript
// Declare maximum threshold
const max = 57;

// Calculate actual value
const actual = max - 13; // 44

// Calculate percentage ratio
const percentage = actual / max; // 44 / 57

// Output percentage (~0.7719 or 77.19%)
console.log(percentage); // Outputs: 0.7719298245614035
```

### Exercise 5: Input Numeric Conversion (`+prompt` or `Number()`)
```javascript
// Issue: prompt returns string inputs ("1" and "2"), leading to string concatenation "12"
// Fix: Use unary + or Number() to convert input strings into numbers before adding

let num1 = +prompt("First number?", 1);
let num2 = +prompt("Second number?", 2);

alert(num1 + num2); // Outputs: 3
```

---

## 11. Best Practices & Common Pitfalls Cheat Sheet

### ✅ Do's
- **Default to `const`**: Use `const` for all variable declarations by default; only switch to `let` when reassignment is required.
- **Use Strict Equality**: Always use `===` and `!==` to avoid subtle type coercion bugs.
- **Use Descriptive Names**: Choose self-explanatory camelCase variable names (e.g., `currentUserName`, `shoppingCartTotal`).
- **Convert Input Strings Explicitly**: Convert form and input values using `Number(val)` or unary `+val` before performing arithmetic.

### ❌ Don'ts
- **Avoid `var`**: Never use `var` in modern JavaScript scripts.
- **Do Not Re-declare Variables**: Re-declaring a `let` or `const` variable in the same scope throws a `SyntaxError`.
- **Avoid Obscure Tricks**: Do not chain complex assignments (`a = b = c`) or embed `++`/`--` inside multi-operator calculations.
- **Do Not Compare Loose Types**: Avoid `==` and `!=` which produce confusing results like `null == undefined` being `true` while `null === undefined` is `false`.

```
