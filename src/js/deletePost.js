import { getBlock } from './getBlock.js';

export async function deletePost(id) {
  try {
    const res = await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Не вдалося видалити пост");
    }

    getBlock();
  } catch (error) {
    console.error("Помилка при видаленні:", error);
  }
}
