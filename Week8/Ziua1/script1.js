// var test = "ceva"; --> nu putem apela ceva din interiorul unei functii
// let test = "ceva";
// const test = "ceva;"

// NU putem apela ceva din interiorul unei functii
// ex1:
// var developer = "hey";
// function myFunction() {
//     var hello = "hello";
// }

// console.log(hello);
// ex2:
// var greeter = "hey";
// var times = 4;
// if (times > 3) {
//     var greater = "hello";
// }

// console.log(greeter);


// for (var i = 0; i < 5; i++) {
//     setTimeout(function(){
//         console.log(i);
//     }, 500);
// }

// EX.3
// let greeter = "hey";
// var times = 4;
// if (times > 3) {
//     let greeter = "hello";
//     console.log(greeter);
// }

// console.log(greeter); 

// EX.4

// var myVar = 1;
// var myVar = 2;
// var myVar = 3;

// console.log(myVar);

// let myVar = 1;
// let myVar = 2;
// let myVar = 3;

// console.log(myVar);

// EX.5
// CONST nu putem sa ii schimbam valoarea
// const myVar = 1;
// myVar = 2;

// console.log(myVar);

// EX.6

// for (let i = 0; i < 5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 500);
// }

// const x;
// x = 1;
// console.log(x);

// "use strict";
// console.log(a);
// var a = 2;

// function test() {
//     var a = 4;
//     console.log(a);
// }

// test();
// console.log(a);


// var a = 5;
// function a() {
//     console.log("C");
// }

// console.log(typeof a);

// var nr1 = 1;
// var nr2 = 2;
// if (nr1 < nr2) {
//     var b = 5;
// }

// console.log(b);


