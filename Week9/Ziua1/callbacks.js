//exemplul 1:
function one() {
    console.log('one');
}

function two() {
    console.log('two');
}

one();
two();

//exemplul 2:
function first() {
    console.log('first');
}

function second() {
    console.log('second');
}

function third() {
    console.log('third');
    first();
    second();
}

third();

//exemplul 3:
function ana() {
    console.log('ana');
}

function are() {
    setTimeout(() => console.log('are'), 500);
}

function mere() {
    console.log('mere');
}

const altaFunctie = () => {
    const name = 'Adrian';
    console.log(`This is ES6, ${name}.`);
}

ana();
are();
mere();
altaFunctie();

//exemplul 4:

const subject = 'matematica';


const doHomework = (subject, callback) => {
    console.log(`Am inceput tema la ${subject}`);
    callback();
}

const callback = () => {
    console.log(`Am terminat tema la ${subject}.`)
}

doHomework('Matematica', callback);

//exemplul 5:

let pointX = 200;
let pointY = 3540;

const returnMeANumber = () => {
    return 8;
}
const sum = (a, b) => {
    console.log(a+b);
}

sum (300, returnMeANumber());