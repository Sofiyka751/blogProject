// import { makeHtml } from "./makeHtml";

// async function getBlock() {
//   try {
//     const url = "http://localhost:3000";
//     const endpoint = "/blogs";

//     const data = await fetch(`${url}${endpoint}`);
//     const res = await data.json();
//     makeHtml(res);
//   } catch (error) {}
// }

// getBlock();

import { makeHtml } from "./makeHtml.js";

export async function getBlock() {
  try {
    const res = await fetch("http://localhost:3000/blogs");
    const data = await res.json();
    makeHtml(data);
  } catch (error) {
    console.error("Помилка завантаження постів:", error);
  }
}
