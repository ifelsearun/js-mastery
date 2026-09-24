### **JavaScript Foundations: Variables and Operators**

#### **1\. Role of JavaScript**

* **JavaScript** is used to make webpages interactive after structuring them with HTML and styling them with CSS[1].

#### **2\. Running JavaScript Code**

* **Inline Scripts**: JavaScript can be placed directly inside an HTML document using the ``[3].
* **Browser Console**: Output can be sent to the browser console using `console.log()`[2][4]. The console is accessed through the browser's Developer Tools by right-clicking, selecting **Inspect**, and opening the **Console** tab[4].
* **Live Preview**: Extensions such as Visual Studio Code's **Live Preview** automatically update the browser preview when the file is saved[4].

#### **3\. Variable Declarations**

Variables act as **storage containers** for data in code[3]. JavaScript provides three declaration keywords:

* **let**: Declares variables that **can be reassigned** later[5][6].
* **const**: Declares variables that **cannot be reassigned**; attempting to reassign a `const` variable throws an error[6][7].
* **var**: The original declaration method[6]. It allows reassignment like `let`, but contains language quirks and is largely obsolete in modern JavaScript, though it still appears in older code[6].

#### **4\. Numbers and Order of Operations**

* JavaScript follows standard mathematical **Order of Operations** (PEMDAS/BODMAS)[8]:
  1. **Parentheses** (evaluated first)[8]
  2. **Exponentiation** (evaluated right-to-left)[8]
  3. **Multiplication and Division** (evaluated left-to-right)[8]
  4. **Addition and Subtraction** (evaluated last, left-to-right)

### **Hands-On Assignment Walkthrough**

Here is a clean, step-by-step breakdown of the assignment exercises from the lesson[1]:

* **Simple Addition**: Running `console.log(23 + 97)` prints `120` to the browser console[1]. You can expand on this by chaining six different numbers together with the `+` operator[1].
* **Order of Operations**: Logging `(4 + 6 + 9) / 77` forces JavaScript to evaluate the sum inside the brackets first before dividing, outputting roughly `0.24675`[1].
* **Declaring &amp; Updating Variables**:
  1. **Declare**: Create a variable with `let a = 10;`[1]. Logging `a` outputs `10`[1].
  2. **Reassign**: Change `a` to a new number without re-declaring `let`[1].
  3. **Multiply**: Create `let b = 7 * a;`[1]. Logging `b` outputs 7 times whatever your updated value of `a` is[1].
* **Calculating Percentages with Constants**:
  1. **Set the maximum**: `const max = 57;`[1]
  2. **Find the actual score**: `const actual = max - 13;`[1]
  3. **Calculate the ratio**: `const percentage = actual / max;`[1]
  4. **Check the result**: Logging `percentage` displays roughly `0.7719`[1].



## Basic Math : Numbers & Operators

JavaScript uses a single data type, **`Number`**, for both integers (e.g., `10`, `-5`) and floating-point numbers (e.g., `3.14`).

### Useful Methods &amp; Conversions
* **Format decimals**: Use `.toFixed(n)` to round numbers to `n` decimal places.
  ```javascript
  const num = 1.76658;
  num.toFixed(2); // "1.77" (returns string)

```

* **Convert Strings to Numbers**: Use `Number()` to convert numerical strings before calculations.

```
let input = "74";
input = Number(input) + 3; // 77 (instead of string concatenation "743")

```

---

## ➕ Arithmetic Operators

| Operator | Name               | Example   | Description                                    |
| -------- | ------------------ | --------- | ---------------------------------------------- |
| **+**    | Addition           | `6 + 9`   | Adds values together                           |
| **\-**   | Subtraction        | `20 - 15` | Subtracts right value from left value          |
| **\***   | Multiplication     | `3 * 7`   | Multiplies values                              |
| **/**    | Division           | `10 / 5`  | Divides left value by right value              |
| **%**    | Remainder (Modulo) | `8 % 3`   | Returns remainder after integer division (`2`) |
| **\*\*** | Exponentiation     | `5 ** 2`  | Raises base to power (`25`)                    |

---

## 📐 Operator Precedence

JavaScript follows standard mathematical order of operations (**PEMDAS / BODMAS**):

1. **Parentheses** **()**: Evaluated first.
2. **Exponentiation** **\*\***: Evaluated next.
3. **Multiplication** **\*** **&amp; Division** **/**: Evaluated left-to-right.
4. **Addition** **+** **&amp; Subtraction** **\-**: Evaluated left-to-right.

```
// Overriding default precedence with parentheses
let result = (50 + 10) / (8 + 2); // 6 (instead of 53.25)

```

---

## ⬆️ Increment &amp; Decrement

* **++**: Increases a variable's value by `1`.
* **\--**: Decreases a variable's value by `1`.

```
let count = 5;
count++; // count is now 6

// Postfix (count++) returns current value then increments.
// Prefix (++count) increments value first then returns it.

```

---

## 📝 Assignment Operators

Shortcuts for evaluating an operation and reassigning the result back to the variable:

| Operator | Example  | Equivalent To |
| -------- | -------- | ------------- |
| **+=**   | `x += 4` | `x = x + 4`   |
| **\-=**  | `x -= 3` | `x = x - 3`   |
| **\*=**  | `x *= 3` | `x = x * 3`   |
| **/=**   | `x /= 5` | `x = x / 5`   |

---

## ⚖️ Comparison Operators

Comparison operators evaluate expressions and return a Boolean value (`true` or `false`).

| Operator             | Name                  | Example   | Description                         |
| -------------------- | --------------------- | --------- | ----------------------------------- |
| **\===**             | Strict Equality       | `5 === 5` | `true` (checks value AND data type) |
| **!==**              | Strict Non-Equality   | `5 !== 3` | `true`                              |
| **&lt;** **/** **\&gt;**   | Less / Greater Than   | `10 &gt; 5`  | `true`                              |
| **&lt;=** **/** **\&gt;=** | Less/Greater or Equal | `5 &gt;= 5`  | `true`                              |

&gt; 💡 **Best Practice**: Always prefer strict equality (`===` / `!==`) over loose equality (`==` / `!=`) to avoid unexpected type-coercion bugs.

```

```


# JavaScript Foundations: Operators &amp; Maths

A reference guide to JavaScript mathematical operations, string conversions, precedence, and assignment operators based on [JavaScript.info](https://javascript.info/operators).

---

## 📖 Key Terminology

* **Operand (Argument)**: The data value that an operator acts upon (e.g., in `5 * 2`, the operands are `5` and `2`).
* **Unary Operator**: An operator that takes a single operand (e.g., `-x` for negation).
* **Binary Operator**: An operator that takes two operands (e.g., `y - x` for subtraction).

---

## 🔢 Arithmetic Operators

JavaScript supports standard arithmetic along with special mathematical operators:

| Operator | Name | Example | Description / Output |
| :--- | :--- | :--- | :--- |
| **`+`** | Addition | `2 + 3` | `5` |
| **`-`** | Subtraction | `5 - 2` | `3` |
| **`*`** | Multiplication | `3 * 4` | `12` |
| **`/`** | Division | `10 / 2` | `5` |
| **`%`** | Remainder (Modulo) | `5 % 2` | Returns remainder (`1`) |
| **`**`** | Exponentiation | `2 ** 3` | Raises base to power (`8`); `4 ** (1/2) = 2` |

---

## 🔤 String Concatenation &amp; Type Conversion

### 1. Binary `+` with Strings
If either operand in a binary `+` operation is a string, JavaScript converts the other operand to a string and concatenates them:

```javascript
alert("my" + "string"); // "mystring"
alert("1" + 2);        // "12"
alert(2 + 2 + "1");    // "41" (Evaluated left-to-right: 2+2=4, 4+'1'="41")
alert("1" + 2 + 2);    // "122" ('1'+2="12", "12"+2="122")

```

&gt; ⚠️ **Note**: Other math operators (`-`, `*`, `/`) convert strings to numbers:

```
alert(6 - "2"); // 4
alert("6" / "2"); // 3

```

### 2\. Unary `+` (Numeric Conversion Shorthand)

Applied to a single value, the unary `+` converts non-number types to numbers (identical to `Number(...)`):

```
alert(+true);       // 1
alert(+"");         // 0
alert(+"2" + +"3"); // 5 (Converts strings to numbers before addition)

```

---

## ⚡ Operator Precedence

Operations execute according to priority rules (higher precedence runs first):

| Precedence | Category                  | Operators             |
| ---------- | ------------------------- | --------------------- |
| **14**     | Unary plus / negation     | `+`, `-`              |
| **13**     | Exponentiation            | `**`                  |
| **12**     | Multiplication / Division | `*`, `/`              |
| **11**     | Addition / Subtraction    | `+`, `-`              |
| **2**      | Assignment                | `=`, `+=`, `-=`, etc. |
| **1**      | Comma                     | `,`                   |

* **Parentheses** **()** override any default precedence rules.

---

## 📝 Assignments &amp; Shortcuts

### Assignment Returns a Value

The `=` operator returns the assigned value, allowing chaining:

```
let a, b, c;
a = b = c = 2 + 2; // Evaluates right-to-left: c=4, b=4, a=4

```

### Modify-in-Place

Shortcuts exist for applying an operator and updating the variable in one step:

```
let n = 2;
n += 5; // Same as n = n + 5 (n becomes 7)
n *= 2; // Same as n = n * 2 (n becomes 14)

```

---

## 🔄 Increment &amp; Decrement (`++` / `--`)

* Can **only** be applied to variables (e.g., `counter++`, not `5++`).
* **Prefix (** **++counter** **)**: Increments and returns the **new** value.
* **Postfix (** **counter++** **)**: Increments and returns the **old** value (before incrementing).

```
let counter = 1;

let prefix = ++counter; // counter is 2, prefix gets 2
let postfix = counter++; // counter becomes 3, postfix gets 2

```

---

## 🛠️ Specialized Operators

* **Bitwise Operators**: Treat numbers as 32-bit integers (`&amp;`, `|`, `^`, `~`, `&lt;&lt;`, `&gt;&gt;`, `&gt;&gt;&gt;`). Used primarily in low-level operations or cryptography.
* **Comma Operator** **,**: Evaluates multiple expressions separated by commas, but **returns only the result of the last expression**:

```
let a = (1 + 2, 3 + 4); // Evaluates 1+2, then 3+4, returns 7

```

