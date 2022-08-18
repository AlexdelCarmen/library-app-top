const addBookButton = document.getElementById("add-book");
const modal = document.querySelector(".input-modal");
const header = document.querySelector("header");
const closeButton = document.querySelector(".input-close");
const submitBookButton = document.querySelector(".submit-input");

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
});
