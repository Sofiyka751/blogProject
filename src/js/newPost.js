// import { getBlock } from "./getBlock.js";

// export async function createPost(data, isEdit = false, id = null) {
//   try {
//     const url = isEdit ? `http://localhost:3000/blogs/${id}` : `http://localhost:3000/blogs`;
//     const method = isEdit ? "PUT" : "POST";

//     const response = await fetch(url, {
//       method,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) throw new Error("Помилка створення/редагування поста");

//     await getBlock();
//   } catch (error) {
//     console.error("Помилка при створенні/редагуванні поста:", error);
//   }
// }


// newPost.js

import { getBlock } from "./getBlock.js";

export async function createPost(data, isEdit = false, id = null) {
  try {
    const url = isEdit ? `http://localhost:3000/blogs/${id}` : `http://localhost:3000/blogs`;
    const method = isEdit ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Error creating/editing post");

    await getBlock();
  } catch (error) {
    console.error("Error in creating/editing post:", error);
  }
}
