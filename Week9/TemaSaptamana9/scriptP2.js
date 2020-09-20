// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"

document.getElementById("myBody").style.fontFamily = "Arial, sans-serif"

// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi

document.getElementById("name").textContent="Liviu";
document.getElementById("fav-drink").textContent="Pepsi";
document.getElementById("born-place").textContent="Bucuresti - Pantelimon";

// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie

document.getElementsByTagName("LI")[0].setAttribute("class", "listitem");
document.getElementsByTagName("LI")[1].setAttribute("class", "listitem");
document.getElementsByTagName("LI")[2].setAttribute("class", "listitem");

// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra

const image = document.createElement('img');
image.src  = 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
document.querySelector('body').appendChild(image);


