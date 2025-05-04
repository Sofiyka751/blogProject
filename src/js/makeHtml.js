const blogList = document.querySelector(".blog-list");

export function makeHtml(data) {
  const markup = data
    .map((item) => {
      return `<li>
  <h2>${item.title}</h2>
  <p>${item.author}</p>
  <p>${item.data}</p>
  <p>${item.article.text}</p>
</li>`;
    })
    .join(" ");

  //   console.log(markup);
  //   return markup
  blogList.innerHTML = markup;
}
