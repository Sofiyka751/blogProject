// export async function createPost(data) {
//     try {

//     } catch (error) {

//     }
// }

import { getBlock } from './getBlock.js';

export async function createPost(data, isEdit = false, id = null) {
  try {
    const url = isEdit
      ? `http://localhost:3000/blogs/${id}`
      : `http://localhost:3000/blogs`;

    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Помилка створення/редагування");

    getBlock();
  } catch (error) {
    console.error("Помилка при створенні/редагуванні поста:", error);
  }
}
