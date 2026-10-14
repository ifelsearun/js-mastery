
// Challenge 1: Day of the week
let day = Number(prompt("Enter a number (1-7): "));

switch (day) {
    case 1:
        alert("Sunday");
        break;

    case 2:
        alert("Monday");
        break;

    case 3:
        alert("Tuesday");
        break;

    case 4:
        alert("Wednesday");
        break;

    case 5:
        alert("Thursday");
        break;

    case 6:
        alert("Friday");
        break;

    case 7:
        alert("Saturday");
        break;

    default:
        alert("Invalid!");

}



// Challenge 2: Simple calculator

const a = Number(prompt("Enter a: "));

const b = Number(prompt("Enter b: "));

const operator = prompt("Enter operator (+,-,*,/): ");

switch (operator){
    case "+":
        alert(`a + b = ${a + b}`);
        break;

    case "-":
        alert(`a - b = ${a - b}`);
        break;

    case "*":
        alert(`a * b = ${a * b}`);
        break;

    case "/":
        alert(`a / b = ${a / b}`);
        break;

    default:
        alert("Invalid operator!");
}


// Challenge 3: Age eligibility

const age = Number(prompt("Enter you age: "));

let canVote = age >= 18 ? "You are eligible to vote!" : "You are NOT eligible to vote!";

alert(canVote);







