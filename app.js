let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (read) {
    this.read = "read it";
  } else {
    this.read = "not read yet";
  }
}

Book.prototype.toggleRead = function () {
  if (this.read == "read it") {
    this.read = "not read yet";
  } else {
    this.read = "read it";
  }
};

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary() {
  // do stuff here
  let bookTitle = prompt("Book Title?");
  let bookAuthor = prompt("Book Author?");
  let bookPages = prompt("Book Pages?");
  let bookRead = prompt("Read book yet??");
  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(newBook);
}

const libDiv = document.querySelector(".library");

const seed = function () {
  let book1 = new Book("Harry Potter", "JK Rowling", 400, true);
  let book2 = new Book("ASOIAF", "GRR Martin", 1000, true);
  let book3 = new Book("War and Peace", "Leo Tolstoy", 1300, true);
  let book4 = new Book("Waldo", "Henry David Thoreau", 200, false);
  myLibrary.push(book1);
  myLibrary.push(book2);
  myLibrary.push(book3);
  myLibrary.push(book4);
};

seed();
// addBookToLibrary();

const buttonAdd = document.querySelector(".btn-add");
buttonAdd.addEventListener("click", function () {
  const collpaseForm = document.querySelector(".collapse-form");
  collpaseForm.classList.toggle("hidden");
});

// const deleteCard = function () {
//   // console.log("DELETE");

// };

const displayBook = function (book) {
  // myLibrary.push(book);

  // creates HTML elements for card
  let titleP = document.createElement("p");
  let authorP = document.createElement("p");
  let pagesP = document.createElement("p");
  let readP = document.createElement("p");
  let closeBtn = document.createElement("button");
  let closeBtnBox = document.createElement("div");
  let toggleBtn = document.createElement("button");
  let toggleBtnBox = document.createElement("div");
  toggleBtnBox.classList.add("toggle-btn-box");
  let bookCard = document.createElement("div");

  // creates HTML content
  titleP.innerText = book.title;
  authorP.innerText = book.author;
  pagesP.innerText = `pages: ${book.pages}`;
  readP.innerText = book.read;
  closeBtn.innerText = "X";
  toggleBtn.innerText = "✔";
  if (book.read == "not read yet") {
    toggleBtn.classList.add("not-read-yet");
  }

  // adds event to delete button
  closeBtn.addEventListener("click", function () {
    const index = myLibrary.indexOf(book);
    if (index > -1) {
      myLibrary.splice(index, 1);
    }
    bookCard.classList.add("hidden");
  });

  toggleBtn.addEventListener("click", function () {
    book.toggleRead();
    readP.innerText = book.read;
    toggleBtn.classList.toggle("not-read-yet");
  });

  // add properties to card
  bookCard.setAttribute("data-id", myLibrary.indexOf(book));
  bookCard.classList.add("book-card");

  // group everything into a card
  bookCard.appendChild(closeBtnBox);
  closeBtnBox.appendChild(closeBtn);
  bookCard.appendChild(titleP);
  bookCard.appendChild(authorP);
  bookCard.appendChild(pagesP);
  bookCard.appendChild(readP);
  bookCard.appendChild(toggleBtnBox);
  toggleBtnBox.appendChild(toggleBtn);

  // add card to page
  libDiv.appendChild(bookCard);
};

function displayLib() {
  console.log("displaying");
  for (let i = 0; i < myLibrary.length; i++) {
    // let titleP = document.createElement("p");
    // let authorP = document.createElement("p");
    // let pagesP = document.createElement("p");
    // let readP = document.createElement("p");
    // titleP.innerText = myLibrary[i].title;
    // authorP.innerText = myLibrary[i].author;
    // pagesP.innerText = `pages: ${myLibrary[i].pages}`;
    // readP.innerText = myLibrary[i].read;
    // let bookCard = document.createElement("div");
    // bookCard.setAttribute("data-id", i);
    // bookCard.classList.add("book-card");
    // bookCard.appendChild(titleP);
    // bookCard.appendChild(authorP);
    // bookCard.appendChild(pagesP);
    // bookCard.appendChild(readP);
    // libDiv.appendChild(bookCard);
    displayBook(myLibrary[i]);
  }
}

displayLib();

const buttonSubmit = document.querySelector(".btn-submit");
buttonSubmit.addEventListener("click", function () {
  console.log("clicked");
  let bookTitle = document.querySelector("#book-title").value;
  let bookAuthor = document.querySelector("#book-author").value;
  let bookPages = document.querySelector("#book-pages").value;
  let radioBtns = document.getElementsByName("book-read");
  let bookRead = true;
  console.log(radioBtns.length);
  for (i = 0; i < radioBtns.length; i++) {
    console.log(radioBtns[i].value);
    if (radioBtns[i].checked) {
      if (radioBtns[i].value == "true") {
        bookRead = true;
      } else {
        bookRead = false;
      }
    }
  }
  let newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  console.log(newBook);
  myLibrary.push(newBook);
  displayBook(newBook);
});

// const buttonDelete = document.querySelector("btn-delete");
