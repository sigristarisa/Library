// get elements from HTML file //
const booklist = document.getElementById("booklist");
const bookForm = document.getElementById("bookForm");

// Define the book details //
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

// Create a library //
class Library {
  constructor() {
    this.library = [];
  }

  // Create a book card //
  bookCard = () => {
    while (booklist.firstChild) {
      booklist.removeChild(booklist.lastChild);
    }
    this.library.forEach((book, index) => {
      // create an container for the book card //
      const bookContainer = document.createElement("div");
      bookContainer.setAttribute("id", index);

      // add the "remove" button //
      const removeButton = document.createElement("button");
      removeButton.setAttribute("class", "removeButton");
      removeButton.textContent = "Remove";

      // add the details of the book //
      const bookTitle = document.createElement("h3");
      const bookAuthor = document.createElement("p");
      const bookPages = document.createElement("p");

      booklist.appendChild(bookContainer);
      bookContainer.appendChild(bookTitle);
      bookContainer.appendChild(bookAuthor);
      bookContainer.appendChild(bookPages);
      bookContainer.appendChild(removeButton);

      bookTitle.innerText = book.title;
      bookAuthor.innerText = "author: " + book.author;
      bookPages.innerText = "pages: " + book.pages + " pages";

      // Remove a book from the library //
      removeButton.addEventListener("click", () => {
        booklist.removeChild(bookContainer);
        this.library.splice(bookContainer, 1);
      });
    });
  };

  // Add a book from the form into the library //
  addToLibrary = () => {
    // Get the input //
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    if (title && author && pages) {
      this.library.push(new Book(title, author, pages));
      this.bookCard();
    } else {
      alert("Fill in all the required information");
    }
    bookForm.style.display = "none";
    return bookForm.reset();
  };
}

// Display the new book form once the button is clicked //
showBookForm = () => {
  if (bookForm.style.display === "none") {
    bookForm.style.display = "block";
  } else {
    bookForm.style.display = "none";
  }
};

const library = new Library();
