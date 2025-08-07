const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: "You Don't Know JS",
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

const bookStoreTitle = document.getElementById("header"); 
// grabs the <h1> element with id "header"

bookStoreTitle.textContent = bookStore.name;
// replaces the header text with the name from the bookStore object

const bookList = document.getElementById("book-list");
// grabs the <ul> element where books will be listed

for (const book of bookStore.books) {    
    const bookContainer = document.createElement('li');
    // makes a new list item to hold one book’s info

    const bookTitle = document.createElement('h3');
    // creates an <h3> element for the book title

    bookTitle.textContent = book.title;
    // sets the text of that <h3> to the book’s title

    const bookAuthor = document.createElement('p');
    // creates a <p> element for the book author

    bookAuthor.textContent = book.author;
    // sets the text of that <p> to the book’s author

    const bookImage = document.createElement('img');
    // creates an <img> element for the book cover

    bookImage.src = book.imageUrl;
    // assigns the image's source URL to the book's imageUrl

    bookContainer.append(bookTitle);
    bookContainer.append(bookAuthor);
    bookContainer.append(bookImage);
    // puts all 3 elements (title, author, image) into the <li>

    bookList.append(bookContainer);
    // adds the <li> to the <ul> in the DOM

    console.log("Adding book:", book.title);
    // just logs each book added, for testing
}

