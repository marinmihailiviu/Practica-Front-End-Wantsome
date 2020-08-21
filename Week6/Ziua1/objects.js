//Ex1:

var car = {
    name: 'Tesla',
    wheels: 4,
}

//inlocuire name
console.log(car);
car.name = 'Mercedes';
console.log(car);

//stergere name
delete car.name;
console.log(car);

//Ex2:

var song = {
    title: 'Hit em up',
    artist: '2pac',
    year: 1995,
    label: 'Death Row',
}

var myKeys = Object.keys(song);
console.log(myKeys); //le scoate in array

var myBigKeys = Object.keys(song).join().toUpperCase(); //myKeys.join().toUpperCase();
console.log(myBigKeys);

var myValues = Object.values(song);
console.log(myValues);

var myLowerValues = Object.values(song).join().toLowerCase(); //myValues.join().toLowerCase();
console.log(myLowerValues);

var fraza = 'Piesa ' + song.title + ' a fost lansata in anul ' + song.year;
console.log(fraza);

//Ex3:

var animal = {
    name: 'Rex',
    age: 6,
    describePet: function() {
        console.log('El este ' + animal.name + ' si are ' + animal.age + ' ani.')
    }
}

animal.describePet();


