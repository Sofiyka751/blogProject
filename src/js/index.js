import { createPost } from "./newPost.js";
import { getBlock } from "./getBlock.js";
// import { editPost } from "./editPost.js";

const form = document.querySelector(".form");
const submitButton = form.querySelector("button");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = form.elements.title.value.trim();
  const author = form.elements.author.value.trim();
  const mainContent = form.elements.mainContent.value.trim();

  if (!title || !author || !mainContent) {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }

  const postData = { title, author, text: mainContent };
  const isEditing = submitButton.dataset.editing;

  await createPost(postData, !!isEditing, isEditing);

  form.reset();
  submitButton.textContent = "Створити";
  delete submitButton.dataset.editing;
});

window.addEventListener("DOMContentLoaded", getBlock);
