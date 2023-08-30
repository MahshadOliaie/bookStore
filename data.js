let root = document.querySelector(".container");


const BOOKS = [
  {
    id: 1,
    title: "خواجه تاجدار",
    author: "ژان گور",
    published_date: 2007,
    language: "persian",
    genre: "تاریخ",
    imgSrc: "1.jpg",
  },
  {
    id: 2,
    title: "ضیافت",
    author: "افلاطون",
    published_date: 385,
    language: "greek",
    genre: "فلسفه",
    imgSrc: "2.jpg",
  },
  {
    id: 3,
    title: "منطق الطیر",
    author: "عطار",
    published_date: 1177,
    language: "persian",
    genre: "شعر",
    imgSrc: "3.jpg",
  },
  {
    id: 4,
    title: "مثنوی معنوی",
    author: "مولوی",
    published_date: 1258,
    language: "persian",
    genre: "شعر",
    imgSrc: "4.jpg",
  },
  {
    id: 5,
    title: "دیوان حافظ",
    author: "حافظ",
    published_date: 1200,
    language: "persian",
    genre: "شعر",
    imgSrc: "5.jpg",
  },
  {
    id: 6,
    title: "رومئو و جولیت",
    author: "ویلیام شکسپیر",
    published_date: 1595,
    language: "english",
    genre: "عاشقانه",
    imgSrc: "6.jpg",
  },
  {
    id: 8,
    title: "ویس و رامین",
    author: "فخرالدین اسعد گرگانی",
    published_date: 1054,
    language: "persian",
    genre: "عاشقانه",
    imgSrc: "7.jpg",
  },
  {
    id: 9,
    title: "گلستان",
    author: "سعدی",
    published_date: 1258,
    language: "persian",
    genre: "شعر",
    imgSrc: "8.jpg",
  },
  {
    id: 9,
    title: "بوستان",
    author: "سعدی",
    published_date: 1257,
    language: "persian",
    genre: "شعر",
    imgSrc: "9.jpg",
  },
  {
    id: 10,
    title: "گلشن راز",
    author: "شیخ محمود شبستری",
    published_date: 1311,
    language: "persian",
    genre: "شعر",
    imgSrc: "10.jpg",
  },
  {
    id: 11,
    title: "لیلی و مجنون",
    author: "نظامی",
    published_date: 1188,
    language: "persian",
    genre: "عاشقانه",
    imgSrc: "11.jpg",
  },
  {
    id: 12,
    title: "شاهنامه",
    author: "فردوسی",
    published_date: 1010,
    language: "persian",
    genre: "شعر",
    imgSrc: "12.jpg",
  },
  {
    id: 13,
    title: "ایلیاد",
    author: "هومر",
    published_date: 762,
    language: "greek",
    genre: "شعر",
    imgSrc: "13.jpg",
  },
  {
    id: 14,
    title: "اودیسه",
    author: "هومر",
    published_date: 725,
    language: "greek",
    genre: "شعر",
    imgSrc: "14.jpg",
  },
  {
    id: 15,
    title: "هملت",
    author: "ویلیام شکسپیر",
    published_date: 1609,
    language: "greek",
    genre: "درام",
    imgSrc: "15.jpg",
  },
  {
    id: 16,
    title: "دن کیشوت",
    author: "میگل دسروانتس",
    published_date: 1605,
    language: "spanish",
    genre: "درام",
    imgSrc: "16.jpg",
  },
];


let likedBooks = [];
let showLikedBooks = document.querySelector(".showLikedBooks");
let h1 = document.querySelector(".h1");


function like(id){
  if(likedBooks.includes(id)){
    likedBooks.splice(likedBooks.indexOf(id),1);
  }else
  likedBooks.push(id);
  render(BOOKS);
}



function showLikedBooksFN(){
  likedBooks=likedBooks.map(item => {
    return item = BOOKS.find(book => book.id===item)
  })
  render(likedBooks);
  h1.textContent = "علاقه مندی ها";
  let hearts = [...document.querySelectorAll(".like")];
  for (const heart of hearts) {
    heart.classList.add("dnone")
  }
  
}




function render(data) {
  let template = data.map((book) => {
    return `<div class="card">
    <div class="like" onclick='like(${book.id})'>
    <svg class="svg  ${(likedBooks.includes(book.id))? "red":""} " xmlns="http://www.w3.org/2000/svg" height="1.5em"
    viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
   ${(likedBooks.includes(book.id))? `<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>` : ` <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />`}
</svg>
</div>
    <div class="img"><img src="./image/${book.imgSrc}" alt=""></div>
    <div class="about">
        <h2 class="title">${book.title}</h2>
        <p class="author">نویسنده: ${book.author}</p>
        <p class="date">سال انتشار: ${book.published_date} </p>
        <p class="lang">زبان: ${book.language} </p>
        <p class="genre">ژانر: ${book.genre}</p>
    </div>
</div>`
  }).join("");


  root.innerHTML = template;

}

window.addEventListener("load" , function(){
  render(BOOKS)
})
showLikedBooks.addEventListener("click" , showLikedBooksFN);