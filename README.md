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