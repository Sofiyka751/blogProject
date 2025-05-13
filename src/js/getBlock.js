import { makeHtml } from "./makeHtml.js";

export async function getBlock() {
  try {
    const res = await fetch("http://localhost:3000/blogs");
    const data = await res.json();
    makeHtml(data);
    return data;
  } catch (error) {
    console.error("Помилка завантаження постів:", error);
    return [];
  }
}
