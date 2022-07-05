let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

addBookToLibrary(theHobbit);

function generateBookHTML(book) {
  let bookDiv = document.createElement("div");
  let bookTitle = document.createElement("h1");
  let bookAuthor = document.createElement("h3");
  let bookPages = document.createElement("p");
  let bookRead = document.createElement("p");
  let bookRemove = document.createElement("button");
  let toggleRead = document.createElement("button");

  bookDiv.classList.add("book-div");
  bookRemove.classList.add("book-remove");
  toggleRead.classList.add("toggle-read");

  let bookContent = document.createTextNode(`${book.title}`);
  let authContent = document.createTextNode(`${book.author}`);
  let pagesContent = document.createTextNode(`${book.pages} pages`);
  let readContent = document.createTextNode(`${book.read}`);
  let bookRemoveText = document.createTextNode("Remove Book");
  let toggleReadText = document.createTextNode("Read-status");

  bookTitle.append(bookContent);
  bookAuthor.append(authContent);
  bookPages.append(pagesContent);
  bookRead.append(readContent);
  bookRemove.append(bookRemoveText);
  toggleRead.append(toggleReadText);
  bookDiv.append(
    bookTitle,
    bookAuthor,
    bookPages,
    bookRead,
    bookRemove,
    toggleRead
  );

  document.body.append(bookDiv);
}

function displayMyLibrary() {
  myLibrary.forEach((book) => {
    generateBookHTML(book);
  });
}

displayMyLibrary();

const newBookBtn = document.querySelector(".new-book-button");

newBookBtn.addEventListener("click", function () {
  document.querySelector(".book-form-div").style.display = "flex";
});

const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newBook = new Book(title.value, author.value, pages.value, read.value);
  addBookToLibrary(newBook);
  generateBookHTML(newBook);
  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
  document.querySelector(".book-form-div").style.display = "none";
});
