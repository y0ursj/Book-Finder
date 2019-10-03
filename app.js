const API_Key = "&AIzaSyADVM2_M63e3HuLFgkt2-Uku1suOzxhevE";
const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
const button = document.querySelector("button");
const input = document.querySelector("#blank");
const list = document.querySelector("#list")


//books = response.data.items

let renderList = (books) => {
  list.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    let el = document.createElement('div')
    el.classList.add('book1');
    el.innerHTML = `<img src=${books[i].volumeInfo.imageLinks.thumbnail}><div class="book-info"><h2>Title: ${books[i].volumeInfo.title}</h2><h3>Author: ${books[i].volumeInfo.authors[0]}</
   </h3><h4>Reader Ratings: ${books[i].volumeInfo.averageRating}</h4><h4 id="textInfo">${books[i].searchInfo.textSnippet}</h4><h4>Page Count: ${books[i].volumeInfo.pageCount}</h4></div><div id="buy-button">${(books[i].saleInfo.buyLink ? `<a href=${books[i].saleInfo.buyLink}><button>Buy</button></a>` : `<p>Not for sale</p>`)}<div>`
    list.append(el)
  }
}

button.addEventListener("click", async function () {
  const response = await axios.get(`${BASE_URL}${input.value}${API_Key}`)
  console.log(response.data.items)
  renderList(response.data.items);
})





