// const blogList = document.querySelector(".blog-list");

// export function makeHtml(data) {
//   const markup = data
//     .map((item) => {
//       return `<li class="new-posts__content-item">
//   <h2 class="new-posts__content-item-title">${item.title}</h2>
//   <p class="new-posts__content-item-author">${item.author}</p>
//   <p class="new-posts__content-item-data">${item.data}</p>
//   <p class="new-posts__content-item-text">${item.article.text}</p>
// </li>`;
//     })
//     .join(" ");

//   //   console.log(markup);
//   //   return markup
//   blogList.innerHTML = markup;
// }

// import { deletePost } from "./deletePost.js";
// import { editPost } from "./editPost.js";

// const blogList = document.querySelector(".blog-list");

// export function makeHtml(data) {
//   const markup = data
//     .map((item) => {
//       return `
//         <li class="new-posts__content-item">
//   <h2 class="new-posts__content-item-title">${item.title}</h2>
//   <p class="new-posts__content-item-author">${item.author}</p>
//   <p class="new-posts__content-item-data">${item.data}</p>
//   <p class="new-posts__content-item-text">${item.article.text}</p>
// </li>`;
//     })
//     .join("");

//   blogList.innerHTML = markup;

//   blogList.querySelectorAll(".delete-btn").forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       const id = e.target.closest("li").dataset.id;
//       deletePost(id);
//     });
//   });

//   blogList.querySelectorAll(".edit-btn").forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       const id = e.target.closest("li").dataset.id;
//       editPost(id);
//     });
//   });
// }

import { deletePost } from "./deletePost.js";
import { editPost } from "./editPost.js";

const blogList = document.querySelector(".blog-list");

export function makeHtml(data) {
  const markup = data
    .map((item) => {
      return `
        <li class="new-posts__content-item" data-id="${item.id}">
          <h2 class="new-posts__content-item-title">${item.title}</h2>
          <p class="new-posts__content-item-author"><strong>Автор:</strong> ${item.author}</p>
          <p class="new-posts__content-item-text">${item.text}</p>
          <button class="edit-btn">Редагувати</button>
          <button class="delete-btn">Видалити</button>
        </li>`;
    })
    .join("");

  blogList.innerHTML = markup;

  blogList.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.closest("li").dataset.id;
      deletePost(id);
    });
  });

  blogList.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.closest("li").dataset.id;
      editPost(id);
    });
  });
}