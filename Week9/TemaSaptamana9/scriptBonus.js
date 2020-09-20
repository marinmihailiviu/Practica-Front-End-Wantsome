const books = [
    {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        img: 'https://cdn.dc5.ro/img-prod/250918433-0-240.jpeg',
        read: true
    },
    {
        title: 'Mindset: The New Psychology of Success',
        img: 'https://cdn.dc5.ro/img-prod/1977077-0-240.jpeg',
        author: 'Carol S. Dweck',
        read: false
    }];

// // Creati o pagina web care are un h1 cu "Book List"
// // Adugati un script style unde sa tinem js-ul
// // Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra

for (var i = 0; i < books.length; i++) {
    var bookP = document.createElement('p');
    var bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookP.appendChild(bookDescription);
    document.body.appendChild(bookP);
}

//BONUS: folositi ul si li pentru a face display la carti
//BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare 
//(nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.

var bookList = document.createElement('ul');
for (var i = 0; i < books.length; i++) {
    var bookItem = document.createElement('li');
    var bookImg = document.createElement('img');
    bookImg.src = books[i].img;
    bookItem.appendChild(bookImg);
    var bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookItem.appendChild(bookDescription);
    if (books[i].read) {
        bookItem.style.color = 'red'
        bookItem.style.fontFamily = 'Georgia';

    }
    bookList.appendChild(bookItem);
}
document.body.appendChild(bookList);
