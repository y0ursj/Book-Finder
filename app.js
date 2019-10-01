const API_Key = "&AIzaSyADVM2_M63e3HuLFgkt2-Uku1suOzxhevE";
const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
const button = document.querySelector("button");
const input = document.querySelector("#blank");
const list = document.querySelector("#list")


//books = response.data.items

let renderList = (books) => {
  list.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    let el = document.createElement('div')
    el.classList.add('book1');
    el.innerHTML = `<h2>Title: ${books[i].volumeInfo.title}</h1> <h2>Author: ${books[i].volumeInfo.authors[0]}</
   </h2> <h2>Ratings: ${books[i].volumeInfo.averageRating}</h2><img src=${books[i].volumeInfo.imageLinks.thumbnail}>`
    list.append(el)
  }
}

button.addEventListener("click", async function () {
  const response = await axios.get(`${BASE_URL}${input.value}${API_Key}`)
  renderList(response.data.items);
})



