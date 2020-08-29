

// var a = 5;
// var b = 2;

// function bar() {
//     console.log(a + b)
// }

// bar();


// // CLOSURE EX1:

// var c = 3;
// function foo() {
//     var a = 5;
//     var b = 2;
//     function bar() {
//         console.log(a + b + c);
//     }
//     bar();
// }


// foo();


// // CLOSURE EX2:


// function foo() {
//     var a = 5;
//     var b = 2;
//     function bar() {
//         console.log(a + b);
//     }
//     return bar;
// }

// var test = foo;
// console.log(test);
// test = test();
// console.log(test);
// test();

// // CLOSURE EX3:

// var zombieOne = (function () {
//     //private variables
//     var firstName = "";
//     var lastName = "";
//     //private functions
//     function init(data) {
//         firstName = data.firstName;
//         lastName = data.lastName;
//     }

//     function combineName() {
//         return firstName + " " + lastName;
//     }

//     function gerunding(action) {
//         return firstName + " " + lastName + " " + "is" + " " + action;
//     }

//     //public functions
//     return {
//         getName: function () {
//             return combineName();
//         },
//         setName: function (data) {
//             return init(data);
//         },
//         setAction: function (action) {
//             return gerunding(action);
//         }
//     };
// })();

// var data = { firstName: "George", lastName: "Rooney" };

// zombieOne.setName(data);
// zombieOne.getName(); // "George Rooney"
// zombieOne.setAction("walking");// "George Rooney is walking"



// function fpn() {
//     var a = { test: 5 };
//     return a;
// }
// fpn();


// var a23 = 1;
// function b24() {
//     a23 = 10;
//     return;
//     function a23() {
//         return 11;
//     }
// }
// b24();
// console.log(a23);


const myFunction3 = () => ({title: "Javascript"});

console.log(myFunction3());


const myFunction4 = () => {
    var a = 2;
    var b = 2;
    return a+b;
}

console.log(myFunction4());


const myFunction5 = (a) => {
    if (a < 5) {
        return "small";
    } else {
        return "big";
    }
}

console.log(myFunction5(24));

let myVar = b => b*5;
console.log(myVar(5));

var b = [1, 2, 3, 4, 5];

var c = b.map(entry => entry*2);
console.log(c);


const car = {
    model: "Fiesta",
    brand: "Ford",
    name: function () {

        setTimeout(() => {
            console.log(`${this.model} ${this.brand}`);  
        }, 300)
        
    }
}

car.name();

// var model = "Logan";
// var brand = "Dacia";
// const car2 = {
//     model: "Fiesta",
//     brand: "Ford",
//     name: function () {
//         console.log(`${this.model} ${this.brand}`);
//     }
// }

// car2.name();