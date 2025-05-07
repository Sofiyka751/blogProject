import { getBlock } from "./getBlock.js";

export async function deletePost(id) {
  try {
    const response = await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Не вдалося видалити пост");

    await getBlock();
  } catch (error) {
    console.error("Помилка при видаленні поста:", error);
  }
}
