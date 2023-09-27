let root = document.querySelector(".container");
let aboutBook = document.querySelector(".more");
let slide = document.querySelector(".slide");
let home = document.querySelector(".home");
let showLikedBooks = document.querySelector(".showLikedBooks");
let h1 = document.querySelector(".h1");
let searchInput = document.querySelector(".search");
let pages = document.querySelector(".pages");
let pageNumbers = [];
let likedBooksId =JSON.parse(localStorage.getItem("likedBookID")) || [];
let num = 8;
let pageCount;
let showItems = [];
let page = 1;
let likedBooks = JSON.parse(localStorage.getItem("likedBooks")) || [];
let currentPath = location.pathname;




function like(id) {
  if (likedBooksId.includes(id)) {
    likedBooksId.splice(likedBooksId.indexOf(id), 1);
  } else
    likedBooksId.push(id);

  localStorage.setItem("likedBookID", JSON.stringify(likedBooksId))

  likedBooks = likedBooksId.map(item => {
    return item = BOOKS.find(book => book.id === item)
  })
  localStorage.setItem("likedBooks", JSON.stringify(likedBooks))

  pagination(page, BOOKS);
}



function showLikedBooksFN() {
  pagination(1, likedBooks);

}


let res = []
function search() {
  let value = searchInput.value;

  if (showLikedBooks.outerHTML.includes("current")) {
    if (value === "") {
      pagination(1, likedBooks)
    }
    else {
      res = likedBooks.filter(item => item.title.includes(value) || item.author.includes(value));
      pagination(1, res)
    }
  }

  else {
    res = BOOKS.filter(item => item.title.includes(value) || item.author.includes(value));
    pagination(1, res)
  }

}


function showDetails(id) {
  item = BOOKS.find(book => book.id === id)
  const { title, imgSrc, author, published_date, language, about, genre } = item;
  aboutBook.style.display = "flex";
  aboutBook.innerHTML = `<div class="close" onclick='aboutBook.style.display = "none";'><svg xmlns="http://www.w3.org/2000/svg" height="1em"
  viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
  <path
      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
</svg></div>
<img src="./image/${imgSrc}" alt="">
<div class="more__about">
  <h1 class="bookName">${title}</h1>
  <p class="autherName">نویسنده: ${author}</p>
  <p class="date">سال انتشار: ${published_date}</p>
  <p class="lang"> زبان: ${language}</p>
  <p class="genre">ژانر: ${genre}</p>
  <h3>درباره کتاب</h3>
  <p class="summary">${about}</p>
  <button class="buy">افزودن به سبد خرید</button>    
</div>
`
  history.pushState({}, "", title)
  currentPath = location.pathname;
}


function pagination(p, data) {

  if (data.length == 0) {
    root.innerHTML = `<p class="notFound">نتیجه ای یافت نشد!</p>`;
    document.querySelector(".pageHandler").classList.add("dnone");
  }
  else {
    document.querySelector(".pageHandler").classList.remove("dnone");


    pageCount = Math.ceil(data.length / num);
    page = p;
    if (p == pageCount)
      showItems = data.slice((p - 1) * num);

    else
      showItems = data.slice((p - 1) * num, (p * num));

    render(showItems);
    pagesFN(data);

    if (pageNumbers.length > 0)
      pageNumbers[p - 1].style.backgroundColor = "rgb(129, 129, 129)";
  }

  if (data == BOOKS) {
    showLikedBooks.classList.remove("current")
    home.classList.add("current");
    slide.classList.remove("dnone");
    h1.innerHTML = "";
  }

  if (data == likedBooks) {
    let hearts = [...document.querySelectorAll(".like")];
    for (const heart of hearts) {
      heart.classList.add("dnone")
    }
    h1.textContent = "علاقه مندی ها"
    slide.classList.add("dnone");
    home.classList.remove("current");
    showLikedBooks.classList.add("current")
  }

}


function pagesFN(data) {
  pages.innerHTML = "";
  for (let i = 1; i <= pageCount; i++) {
    pages.innerHTML += `<p onclick="pagination(${i},${(data == BOOKS) ? "BOOKS" : (data == likedBooks) ? "likedBooks" : "res"})" class="pagechoose">${i}</p>`
  }
  pageNumbers = document.querySelectorAll(".pagechoose")
}





function render(data) {
  let template = data.map((book) => {
    const { id, title, author, imgSrc } = book;
    return `<div class="card">
    <div class="img" onclick="showDetails(${id})"><img src="./image/${imgSrc}" alt=""></div>
    <div class="about">
        <div><h2 class="title">${title}</h2>
        <p class="author">${author}</p></div>
        <div class="like" onclick='like(${id})'>
    <svg class="svg  ${(likedBooksId.includes(id)) ? "red" : ""} " xmlns="http://www.w3.org/2000/svg" height="1.5em"
    viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
   ${(likedBooksId.includes(id)) ? `<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>` : ` <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />`}
</svg>
</div>
    </div>
</div>`
  }).join("");

  root.innerHTML = template;





}


function getValue() {
  num = document.getElementById("number").value;
  if (showLikedBooks.outerHTML.includes("current")) {
    pagination(1, likedBooks);
  } else
    pagination(1, BOOKS);
}



function handleRoute(event) {
  let href = event.target.getAttribute("class");

  history.pushState({}, "", href)
  currentPath = location.pathname;

  if (href == "homePage") {
    pagination(page, BOOKS)
  }
  if (href == "favoritePage") {
    showLikedBooksFN();
  }
}


function handleLocation() {
  const pathname = location.pathname;

  if (currentPath.length > 20 && pathname == "/favoritePage") {
    aboutBook.style.display = "none";
    showLikedBooksFN();
  }

  if (pathname == "/homePage" || pathname == "/") {
    pagination(page, BOOKS)
    aboutBook.style.display = "none";
  }
}


home.addEventListener("click", handleRoute);

window.addEventListener("load", function () {
  pagination(page, BOOKS)
})


window.addEventListener("popstate", handleLocation)

showLikedBooks.addEventListener("click", handleRoute);

searchInput.addEventListener("keyup", search);

document.querySelector("#number").addEventListener("change", getValue);