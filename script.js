const addBookButton = document.getElementById("add-book");
const modal = document.querySelector(".input-modal");
const header = document.querySelector("header");
const closeButton = document.querySelector(".input-close");
const submitBookButton = document.querySelector(".submit-input");
const libraryContainer = document.querySelector(".library-container");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");

let bookCollection = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createBook() {
  var book = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    "no"
  );

  bookCollection.push(book);
}

function removeCards() {
  const allCards = document.querySelectorAll(".book-card");
  allCards.forEach((card) => card.remove());
}

function displayBooks() {
  removeCards();
  for (let i = 0; i < bookCollection.length; i++) {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("id", i);
    libraryContainer.appendChild(bookCard);
    let cardRow1 = document.createElement("div");
    cardRow1.classList.add("card-row");
    bookCard.appendChild(cardRow1);
    let bookTitleField = document.createElement("p");
    bookTitleField.textContent = "Title:";
    bookTitleField.classList.add("bold-text");
    cardRow1.appendChild(bookTitleField);
    let bookTitle = document.createElement("p");
    bookTitle.textContent = bookCollection[i].title;
    bookTitle.classList.add("text");
    cardRow1.appendChild(bookTitle);
    let cardRow2 = document.createElement("div");
    cardRow2.classList.add("card-row");
    bookCard.appendChild(cardRow2);
    let authorField = document.createElement("p");
    authorField.textContent = "Author:";
    authorField.classList.add("bold-text");
    cardRow2.appendChild(authorField);
    let author = document.createElement("p");
    author.textContent = bookCollection[i].author;
    author.classList.add("text");
    cardRow2.appendChild(author);
    let cardRow3 = document.createElement("div");
    cardRow3.classList.add("card-row");
    bookCard.appendChild(cardRow3);
    let pagesField = document.createElement("p");
    pagesField.textContent = "Author:";
    pagesField.classList.add("bold-text");
    cardRow3.appendChild(pagesField);
    let pages = document.createElement("p");
    pages.textContent = bookCollection[i].pages;
    pages.classList.add("text");
    cardRow3.appendChild(pages);
    let cardRow4 = document.createElement("div");
    cardRow4.classList.add("card-row");
    bookCard.appendChild(cardRow4);
    let readField = document.createElement("p");
    readField.classList.add("bold-text");
    readField.textContent = "Read?";
    cardRow4.appendChild(readField);
    let toggleLabel = document.createElement("label");
    toggleLabel.classList.add("switch");
    cardRow4.appendChild(toggleLabel);
    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    toggleLabel.appendChild(checkbox);
    let slider = document.createElement("span");
    slider.classList.add("slider");
    toggleLabel.appendChild(slider);
  }
}

addBookButton.addEventListener("click", () => {
  modal.classList.remove("invisible");
  header.classList.add("invisible");
});

closeButton.addEventListener("click", () => {
  modal.classList.add("invisible");
  header.classList.remove("invisible");
});

submitBookButton.addEventListener("click", () => {
  modal.classList.add("invisible");
  header.classList.remove("invisible");
  createBook();
  displayBooks();
});
