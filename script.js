// Assign a book //
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// Create a library //
class Library {
  constructor() {
    this.library = [];
  }

  // Add a new book in your library //
  addBookToLibrary = (newBook) => {
    if (!this.library.includes(newBook)) {
      this.library.push(newBook);
    }
    return this.library;
  };

  // Display your book in your library
  showLibrary = () => {
    this.library.forEach((book, index) => {
      const booklist = document.getElementById("booklist");
      const bookContainer = document.createElement("div");
      bookContainer.setAttribute("id", index);

      const bookTitle = document.createElement("h3");
      const bookAuthor = document.createElement("p");
      const bookPages = document.createElement("p");

      booklist.appendChild(bookContainer);
      bookContainer.appendChild(bookTitle);
      bookContainer.appendChild(bookAuthor);
      bookContainer.appendChild(bookPages);
      bookTitle.innerText = book.title;
      bookAuthor.innerText = "author: " + book.author;
      bookPages.innerText = "pages: " + book.pages + " pages";
    });
  };
}

// Display the new book form once the button is clicked //
const openBookForm = () => {
  const bookForm = document.getElementById("bookForm");
  if (bookForm.style.display === "none") {
    bookForm.style.display = "block";
  } else {
    bookForm.style.display = "none";
  }
};

// console.log
const normalPeople = new Book("Normal People", "Sally Rooney", 345, true);
const aLittleLife = new Book("A Little Life", "Hanya Yanagihara", 734, true);
const catcherInTheRye = new Book(
  "Catcher in the Rye",
  "J.D. Salinger",
  300,
  true
);
const openWater = new Book("Open Water", "Caleb Azumah Nelson", 200, true);

const library = new Library();

library.addBookToLibrary(normalPeople);
library.addBookToLibrary(aLittleLife);
library.addBookToLibrary(catcherInTheRye);
library.addBookToLibrary(openWater);

library.showLibrary();
