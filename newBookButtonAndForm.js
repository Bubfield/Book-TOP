import { addBookToLibrary, Book } from "./index.js";
import { generateBookHTML } from "./generateBookHTML.js";

const newBookBtn = document.querySelector(".new-book-button");

newBookBtn.addEventListener("click", function () {
  document.querySelector(".book-form-div").style.display = "flex";
});

const form = document.getElementById("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const titleErrorSpan = document.querySelector("#title + span.error");
  const authorErrorSpan = document.querySelector("#author + span.error");
  const pagesErrorSpan = document.querySelector("#pages + span.error");
  const radioBtnSpan = document.getElementById("radio-btn-span");
  const read = document.querySelector('input[name="read"]:checked');

  if (!title.value) {
    titleErrorSpan.style.display = "block";
    title.className = "error";
  } else {
    titleErrorSpan.style.display = "none";
    title.className = "";
  }

  if (!author.value) {
    authorErrorSpan.style.display = "block";
    author.className = "error";
  } else {
    authorErrorSpan.style.display = "none";
    author.className = "";
  }

  if (!pages.value || pages.value < 10 || pages.value > 2000) {
    pagesErrorSpan.style.display = "block";
    pages.className = "error";
  } else {
    pagesErrorSpan.style.display = "none";
    pages.className = "";
  }

  if (!read) {
    radioBtnSpan.style.display = "block";
  } else {
    radioBtnSpan.style.display = "none";
  }

  if (title.value && author.value && pages.value && read) {
    let newBook = new Book(title.value, author.value, pages.value, read.value);
    addBookToLibrary(newBook);
    generateBookHTML(newBook);
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
    document.querySelector(".book-form-div").style.display = "none";
  }
});
