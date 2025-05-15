// import { getBlock } from "./getBlock.js";
// import { createPost } from "./newPost.js";

// const form = document.querySelector(".form");
// const submitButton = form.querySelector(".newPost__content-form-btn");
// const searchInput = document.querySelector(".searchPost__content-title_input");

// let allPosts = [];

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const title = form.elements.title.value.trim();
//   const author = form.elements.author.value.trim();
//   const mainContent = form.elements.mainContent.value.trim();

//   if (!title || !author || !mainContent) {
//     alert("Будь ласка, заповніть усі поля!");
//     return;
//   }

//   const postData = { title, author, text: mainContent };
//   const isEditing = submitButton.dataset.editing;

//   await createPost(postData, Boolean(isEditing), isEditing ? parseInt(isEditing) : null);

//   form.reset();
//   submitButton.textContent = "Створити";
//   delete submitButton.dataset.editing;
// });

// window.addEventListener("DOMContentLoaded", async () => {
//   allPosts = await getBlock(); 
// });

// const debounce = (func, delay) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func(...args), delay);
//   };
// };

// searchInput.addEventListener("input", debounce(() => {
//   const searchTerm = searchInput.value.toLowerCase();
//   const filtered = allPosts.filter(post =>
//     post.title.toLowerCase().includes(searchTerm) ||
//     post.text.toLowerCase().includes(searchTerm)
//   );
//   import("./makeHtml.js").then(module => module.makeHtml(filtered));
// }, 300));



// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const title = form.elements.title.value.trim();
//   const author = form.elements.author.value.trim();
//   const mainContent = form.elements.mainContent.value.trim();
//   const category = form.elements.category.value;

//   if (!title || !author || !mainContent) {
//     alert("Будь ласка, заповніть усі поля!");
//     return;
//   }

//   const postData = { title, author, text: mainContent, category };
//   const isEditing = submitButton.dataset.editing;

//   await createPost(postData, Boolean(isEditing), isEditing ? parseInt(isEditing) : null);

//   form.reset();
//   submitButton.textContent = "Create";
//   delete submitButton.dataset.editing;
// });

// window.addEventListener("DOMContentLoaded", async () => {
//   await getBlock();
// });


// index.js

import { getBlock } from "./getBlock.js";
import { createPost } from "./newPost.js";

const form = document.querySelector(".form");
const submitButton = form.querySelector(".newPost__content-form-btn");
const searchInput = document.querySelector(".searchPost__content-title_input");

let allPosts = [];

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = form.elements.title.value.trim();
  const author = form.elements.author.value.trim();
  const mainContent = form.elements.mainContent.value.trim();
  const category = form.elements.category.value;

  if (!title || !author || !mainContent) {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }

  const postData = { title, author, text: mainContent, category };
  const isEditing = submitButton.dataset.editing;

  await createPost(postData, Boolean(isEditing), isEditing ? parseInt(isEditing) : null);

  form.reset();
  submitButton.textContent = "Create";
  delete submitButton.dataset.editing;
});

window.addEventListener("DOMContentLoaded", async () => {
  allPosts = await getBlock(); 
});

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

searchInput.addEventListener("input", debounce(() => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.text.toLowerCase().includes(searchTerm) ||
    post.category.toLowerCase().includes(searchTerm)
  );
  import("./makeHtml.js").then(module => module.makeHtml(filtered));
}, 300));