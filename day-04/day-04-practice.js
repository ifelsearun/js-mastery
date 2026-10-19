// Challenge 1: Group the cases

let month = +prompt("Enter month : ", '');

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter season");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Summer season");
        break;
    case 6:
    case 7:
    case 8:
    case 9:
        console.log("Rainy season");
        break;
    case 10:
    case 11:
        console.log("Autumn season");
        break;
    default:
        console.log("Invalid month!");
}