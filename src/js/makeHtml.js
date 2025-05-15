// import { editPost } from "./editPost.js";
// import { deletePost } from "./deletePost.js";

// export function makeHtml(posts) {
//   const postContainer =
//     document.querySelector(".postsContainer") || createPostsContainer();
//   postContainer.innerHTML = "";

//   posts.forEach((post) => {
//     const postCard = document.createElement("div");
//     postCard.className = "postCard";
//     postCard.innerHTML = `
//       <h3 class="newPosts__content-item-title">${post.title}</h3>
//       <p class="newPosts__content-item-author"><strong>Автор:</strong> ${post.author}</p>
//       <p class="newPosts__content-item-text">${post.text}</p>
//       <div class="postActions">
//         <button class="edit-btn" data-id="${post.id}">Редагувати</button>
//         <button class="delete-btn" data-id="${post.id}">Видалити</button>
//       </div>`;

//     postCard.querySelector(".edit-btn").addEventListener("click", () => {
//       editPost(post.id);
//     });

//     postCard.querySelector(".delete-btn").addEventListener("click", () => {
//       if (confirm("Ви дійсно хочете видалити цей пост?")) {
//         deletePost(post.id);
//       }
//     });

//     postContainer.appendChild(postCard);
//   });
// }

// function createPostsContainer() {
//   const container = document.createElement("div");
//   container.className = "postsContainer";
//   document.body.appendChild(container);
//   return container;
// }

import { editPost } from "./editPost.js";
import { deletePost } from "./deletePost.js";

export function makeHtml(posts) {
  const postContainer = document.querySelector(".postsContainer") || createPostsContainer();
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.className = "postCard";
    postCard.innerHTML = `
      <h3 class="newPosts__content-item-title">${post.title}</h3>
      <p class="newPosts__content-item-author"><strong>Автор:</strong> ${post.author}</p>
      <p class="newPosts__content-item-category"><strong>Категорія:</strong> ${post.category}</p>
      ${post.photoUrl ? `<img src="${post.photoUrl}" alt="Post Image" class="post-photo">` : ""}
      <p class="newPosts__content-item-text">${post.text}</p>
      <div class="postActions">
        <button class="edit-btn" data-id="${post.id}">Редагувати</button>
        <button class="delete-btn" data-id="${post.id}">Видалити</button>
      </div>`;

    postCard.querySelector(".edit-btn").addEventListener("click", () => {
      editPost(post.id);
    });

    postCard.querySelector(".delete-btn").addEventListener("click", () => {
      if (confirm("Ви дійсно хочете видалити цей пост?")) {
        deletePost(post.id);
      }
    });

    postContainer.appendChild(postCard);
  });
}

function createPostsContainer() {
  const container = document.createElement("div");
  container.className = "postsContainer";
  document.body.appendChild(container);
  return container;
}
