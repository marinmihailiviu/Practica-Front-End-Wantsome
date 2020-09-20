//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare


//1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata

function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNumbers(3));

// --------------------------------------------------------------------------------------------------------------------------------------  


//2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.

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

console.log(findLongestString("Today is a nice day for writing code in JS."));


// --------------------------------------------------------------------------------------------------------------------------------------  


//3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'

function reverseString(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    console.log(joinArray);
}

reverseString("Today is a nice day for writing code in JS.");

// --------------------------------------------------------------------------------------------------------------------------------------  


//4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet


// --------------------------------------------------------------------------------------------------------------------------------------  


//5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
//Exemplu: input: 64  ->  output: 1:4

function convertToTime(numberValue) {
    var hours = Math.floor(numberValue / 60);
    var minutes = numberValue % 60;
    return hours + ":" + minutes;
}

console.log(convertToTime(64));

// --------------------------------------------------------------------------------------------------------------------------------------  


//6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic

function orderAlphabetical(string) {
    let lower = string.toLowerCase();
    return lower.split('').sort().join('');
}
console.log(orderAlphabetical("Today is a nice day for writing code in JS."));


// --------------------------------------------------------------------------------------------------------------------------------------


//7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
//Exemplu: input: "+a+b+c+"   ->   output: true
//Exemply: input: "+ab+c+d+"  ->   output: false

function verifyChar(string) {

    if (string.startsWith('+') && (string.endsWith('+'))) {
        return ("true");
    } else {
        return ("false");
    }
}

verifyChar("+a+b+c+")
// console.log(verifyChar("+ab+c+d+")) //nu imi dau seama cum as putea sa verific dupa fiecare litera:(