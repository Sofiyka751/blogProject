import { getBlock } from './getBlock.js';

export async function editPost(id) {
  try {
    const res = await fetch(`http://localhost:3000/blogs/${id}`);
    const post = await res.json();

    // Заповнюємо форму поточними даними
    document.querySelector('#title').value = post.title;
    document.querySelector('#author').value = post.author;
    document.querySelector('#mainContent').value = post.text;

    // Замінюємо submit на оновлення
    const form = document.querySelector('.form');
    const submitButton = form.querySelector('button');

    submitButton.textContent = "Оновити";
    submitButton.dataset.editing = id;

  } catch (error) {
    console.error("Помилка при редагуванні:", error);
  }
}
