import { myLibrary, displayMyLibrary } from "./index.js";

export function generateBookHTML(book) {
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
  bookRemove.type = "button";
  toggleRead.type = "button";
  bookRemove.setAttribute("data-id", myLibrary.length - 1);

  let bookContent = document.createTextNode(`${book.title}`);
  let authContent = document.createTextNode(`${book.author}`);
  let pagesContent = document.createTextNode(`${book.pages} pages`);
  let readContent = document.createTextNode(`${book.read}`);
  let bookRemoveText = document.createTextNode("Remove Book");
  let toggleReadText = document.createTextNode("Read-status");

  bookRemove.addEventListener("click", function (e) {
    let id = e.currentTarget.dataset.id;
    myLibrary.splice(id, id + 1);
    displayMyLibrary();
  });

  toggleRead.addEventListener("click", function () {
    if (bookRead.textContent === "not read yet") {
      bookRead.textContent = "I have read";
    } else {
      bookRead.textContent = "not read yet";
    }
  });

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

  document.getElementById("books-container").append(bookDiv);
}
