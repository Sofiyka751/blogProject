export async function editPost(id) {
  try {
    const response = await fetch(`http://localhost:3000/blogs/${id}`);
    if (!response.ok) throw new Error("Помилка завантаження поста для редагування");

    const post = await response.json();
    
    const form = document.querySelector(".form");
    const submitButton = form.querySelector("button");

    form.elements.title.value = post.title;
    form.elements.author.value = post.author;
    form.elements.mainContent.value = post.text;

    submitButton.textContent = "Оновити";
    submitButton.dataset.editing = id;

    form.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    console.error("Помилка при редагуванні поста:", error);
  }
}
