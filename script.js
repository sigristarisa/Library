class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

class Library {
  constructor() {
    this.library = [];
  }

  // Create a book card
  bookCard = () => {
    this.library.forEach((book) => {
      // create an container for the book card //
      const booklist = document.getElementById("booklist");
      const bookContainer = document.createElement("div");
      bookContainer.setAttribute("id", index);

      // add the "remove" button //
      // const removeButton = document.createElement("button");
      // removeButton.setAttribute("class", "removeButton");
      // removeButton.textContent = "Remove";

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
    });
  };

  // Add the book from the form into the library //
  createBook = () => {
    const bookForm = document.getElementById("bookForm");
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    this.library.push(new Book(title, author, pages));
    console.log(this.library);
    return bookForm.reset();
  };
}

// Display the new book form once the button is clicked //
showBookForm = () => {
  const bookForm = document.getElementById("bookForm");
  if (bookForm.style.display === "none") {
    bookForm.style.display = "block";
  } else {
    bookForm.style.display = "none";
  }
};

const library = new Library();
