// 4. Scrieti o functie de tip IIFE care:
// - sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
// var cars = [
//   {name: "John",  salary: 20000 },
//   { name: "Danny", salary: 30500 },
//   { name: "Bekker", salary: 15000 }
// ];
// - afiseaza in consola array-ul sortat

// Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. Verificarea se va face prin deschiderea paginii html in browser.


var salary = {
    name: "John", salary: 20000,
    name: "Danny", salary: 30500,
    name: "Bekker", salary: 15000,
}

salary.sort((a, b) => {
    return a.salary - b.salary;
});

console.log(salary);

// employees.forEach((e) => {
//     console.log(`${e.firstName} ${e.lastName} ${e.age}`);
// });