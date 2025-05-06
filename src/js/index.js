import { createPost } from "./newPost.js";
import { getBlock } from "./getBlock.js";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
      
        const title = form.elements.title.value.trim();
        const author = form.elements.author.value.trim();
        const mainContent = form.elements.mainContent.value.trim();
      
        // Простий захист від порожніх полів
        if (!title || !author || !mainContent) {
          alert("Будь ласка, заповніть усі поля!");
          return;
        }
      
        const postData = {
          title,
          author,
          text: mainContent,
        };
      
        createPost(postData);
      
        // Очистити форму після успішного відправлення
        form.reset();
      });
      
});

getBlock();
