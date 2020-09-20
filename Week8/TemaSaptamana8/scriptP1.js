
//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function myCalculateFunction(a, b) {
    if (a === b) {
        return (a + b) * 5;
    }
    else {
        return (a + b);
    }
}
console.log(myCalculateFunction(10, 5));
console.log(myCalculateFunction(10, 10));

// --------------------------------------------------------------------------------------------------------------------------------------  

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false


function testFunction(a, b) {
    return ((a === 30 || b === 30) || (a + b == 30));
}
console.log(testFunction(30, 30));
console.log(testFunction(15, 15));
console.log(testFunction(10, 15));


// --------------------------------------------------------------------------------------------------------------------------------------  

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkString(string) {
    if (string === null || string === undefined || string.substring(0, 2) === 'JS') {
        return string;
    }
    return "JS" + string;
}

console.log(checkString("JSisAwsome"));
console.log(checkString("isEasy"));
console.log(checkString(""));


// --------------------------------------------------------------------------------------------------------------------------------------  

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function removeDuplicates(num) {
    let x;
    let len = num.length;
    let out = [];
    let obj = {};

    for (x = 0; x < len; x++) {
        obj[num[x]] = 0;
    }
    for (x in obj) {
        out.push(x);
    }
    return out;
}
let myNumbers = [1, 2, 2, 3, 3, 4];
result = removeDuplicates(myNumbers);
console.log(result);

// --------------------------------------------------------------------------------------------------------------------------------------  

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

function findLongestString(string) {
    let wordArray = string.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length;
            result = wordArray[i];
        }
    }
    return result;
}

console.log(findLongestString('Wantsome is Awsomeeee today'));


// --------------------------------------------------------------------------------------------------------------------------------------  

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

var a, b, symbol;
for (a = 1; a <= 6; a++) {
    for (b = 1; b < a; b++) {
        symbol = symbol + (" * ");
    }
    console.log(symbol);
    symbol = ' ';
}

// --------------------------------------------------------------------------------------------------------------------------------------  

//ex7
// const negativeNumbers = [];

// function extractNegativeNumbers(numbers) {
//     // append any negative numbers found in the numbers array 
//     // into the negativeNumbers array constant variable above
// }
// extractNegativeNumbers([1, 2, -5, 4, -6])

const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    return numbers.filter(value => value < 0);

}
console.log(extractNegativeNumbers([1, 2, -5, 4, -6]));


// --------------------------------------------------------------------------------------------------------------------------------------  

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function calculator(num1, num2, operator) {
    if (operator === 'add') {
        return num1 + num2;
    } else if (operator === 'substract') {
        return num1 - num2;
    } else if (operator === 'multiply') {
        return num1 * num2;
    } else if (operator === 'divide') {
        return num1 / num2;
    } else {
        operator = 'Operator is not defined!';
        return 'Operator is not defined!'
    }
}

console.log(calculator(2, 5, "add"));
console.log(calculator(10, 8, "substract"));


// --------------------------------------------------------------------------------------------------------------------------------------  

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function isDiv(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return ("BOTH");
    } else if (number % 3 === 0) {
        return ("THREE");
    } else {
        return (number);
    }
}

console.log(isDiv(15));


// --------------------------------------------------------------------------------------------------------------------------------------  

//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

let today = new Date();
let day = today.getDay();
let daylist = ["Duminica", "Luni", "Marti", "Miercuri ", "Joi", "Vineri", "Sambata"];
console.log("Azi este : " + daylist[day] + ".");
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log("Ora este : " + hour + prepand + " : " + minute + " : " + second);


// --------------------------------------------------------------------------------------------------------------------------------------  

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

// --------------------------------------------------------------------------------------------------------------------------------------  

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}

console.log(removeVowels("Hey I am developer"));

// --------------------------------------------------------------------------------------------------------------------------------------  

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

var isSquareNumber = function (number) {
    return Math.sqrt(number) % 1 === 0;
}

console.log(isSquareNumber(-1));
console.log(isSquareNumber(25));
console.log(isSquareNumber(3));

// --------------------------------------------------------------------------------------------------------------------------------------  

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true


function isAnagram(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    return sortString(stringA) === sortString(stringB)
}

function sortString(string) {
    return string.split('').sort().join('');
}

console.log(isAnagram("School master", "The class room"))
console.log(isAnagram("silent", "listen"))
