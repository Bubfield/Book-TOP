import { generateBookHTML } from "./generateBookHTML.js";

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  showInfo() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  }
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

addBookToLibrary(theHobbit);

export function displayMyLibrary() {
  let booksContainer = document.getElementById("books-container");
  while (booksContainer.firstChild) {
    booksContainer.removeChild(booksContainer.firstChild);
  }
  myLibrary.forEach((book) => {
    generateBookHTML(book);
  });
}

displayMyLibrary();

export { myLibrary, addBookToLibrary, Book };
