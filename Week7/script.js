/*
param1: nr 
param2: nr 
param3: S sau scadere, A sau adunare, I sau inmultire, D sau inpartire

functia intoarce rezultatul

vreau o functie care calculeaza suma a doua numere

vreau o functie care calculeaza scaderea a doua numere

vreau o functie care calculeaza inmultirea a doua numere

*/

function calculator(number1, number2, mathOperation) {
    var result;
    switch (detectMathOperation(mathOperation)) {
        case "S":
        case "scadere":
            result = substract(number1, number2);
            break;
        case "A":
            result = sum(number1, number2);
            break;
        case "I":
            result = multiply(number1, number2);
            break;
        case "D":
            result = divide(number1, number2);
            break;
        default:
            result = "Operatia introdusa nu este valabila. Te rugam sa reincerci!";
            break;
    }

    return result;
}


function detectMathOperation(mathOperation) {
    if (mathOperation === "S" || mathOperation === "scadere") {
        return "S";
    }
    else if (mathOperation === "A" || mathOperation === "adunare") {
        return "A";
    } else if (mathOperation === "I" || mathOperation === "inmultire") {
        return "I";
    } else if (mathOperation === "D" || mathOperation === "inpartire") {
        return "D";
    }
    return null;
}


function sum(number1, number2) {
    return number1 + number2;
}

function substract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}


console.log(calculator(4, 2, "scadere"))
console.log(calculator(4, 2, "S"))

// console.log(calculator(4, 2, "scadere")) //2
// console.log(calculator(4, 2, "A")) //6
// console.log(calculator(4, 2, "I")) //8
// console.log(calculator(4, 2, "D")) //2
// console.log(calculator(4, 2, "H")) //2

// console.log(sum(4, 4)); // 8
// console.log(substract(4,5)); // 8

