import { makeHtml } from "./makeHtml";

async function getBlock() {
  try {
    const url = "http://localhost:3000";
    const endpoint = "/blogs";

    const data = await fetch(`${url}${endpoint}`);
    const res = await data.json();
    makeHtml(res);
  } catch (error) {}
}

getBlock();
