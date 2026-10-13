// Student Result Checker 🎓

let Name = prompt("Enter your name: ");
let marks = Number(prompt("Enter your marks: "));

if (marks < 0 || marks > 100) {
    console.log("Enter a valid mark!");
} else if (marks >= 90) {
    console.log(`Name: ${Name}`);
    console.log(`Marks: ${marks}`);
    console.log("Grade : A");
    console.log("Result: PASS")
} else if (marks >= 80) {
    console.log(`Name: ${Name}`);
    console.log(`Marks: ${marks}`);
    console.log("Grade : B");
    console.log("Result: PASS")
} else if (marks >= 70) {
    console.log(`Name: ${Name}`);
    console.log(`Marks: ${marks}`);
    console.log("Grade : C");
    console.log("Result: PASS")
} else if (marks >= 60) {
    console.log(`Name: ${Name}`);
    console.log(`Marks: ${marks}`);
    console.log("Grade : D");
    console.log("Result: PASS")
} else {
    console.log(`Name: ${Name}`);
    console.log(`Marks: ${marks}`);
    console.log("Grade : F");
    console.log("Result: FAIL")
}