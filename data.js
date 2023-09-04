let root = document.querySelector(".container");
let aboutBook = document.querySelector(".more");
let slide = document.querySelector(".slide");
let home = document.querySelector(".home");
let showLikedBooks = document.querySelector(".showLikedBooks");
let h1 = document.querySelector(".h1");
let searchInput = document.querySelector(".search");
let pages = document.querySelector(".pages");
let pageNumbers = [];
let likedBooksId = [];
let num = 8;
let pageCount;
let showItems = [];
let page = 1;
let likedBooks = [];

const BOOKS = [
  {
    id: 1,
    title: "خواجه تاجدار",
    author: "ژان گور",
    published_date: 2007,
    language: "persian",
    genre: "تاریخ",
    imgSrc: "1.jpg",
    about: `خواجه تاجدار رمانی تاریخی است. نا نویسنده آن طور که در مقدمه کتاب ذکر شده است، ژان گور
    است و داستان با ترجمه و تلخیص ذبیح‌ الله منصوری در اختیارتان قرار دارد. هرچند این کتاب هم بنا به باور
    بسیاری از مردم، ترجمه نیست بلکه ساخته و پرداخته ذهن خود منصوری است.
    داستان به مرور رخدادهای تاریخی ایران می‌پردازد. از زمان مرگ نادرشاه افشار تا تا پایان زندگی آقا محمدخان.
    داستانی که با تولد او آغاز می‌شود و با مرگش به پایان می‌رسد.`,
  },
  {
    id: 2,
    title: "ضیافت",
    author: "افلاطون",
    published_date: 385,
    language: "greek",
    genre: "فلسفه",
    imgSrc: "2.jpg",
    about: `ضیافت (Syposium) تعریف افلاطون از عشق است، چنانکه نام دیگر آن رساله‌ای در باب عشق است. افلاطون فیلسوفی پر سر و صداست. کسی که مجموعه گفته‌های سقراط را به نوشته تبدیل کرده است و همین کار باعث شده بسیاری تردید ببرند که سقراط شخصیتی زاده ذهن افلاطون است و اصلاً وجود خارجی نداشته است. از طرف دیگر برخی صاحب نظران و فلاسفه جدید معتقدند افلاطون فلسفه را از آنچه هدف اصلی‌اش بود دور کردند. به زعم آنان فلسفه برای این به وجود آمده بود تا انسان و جامعه را به خودآگاهی برساند و زندگی را برای نسل بشر لذت بخش بسازد. با همه این اوصاف کتاب ضیافت می‌تواند نگاهی جدید باشد به یکی از غنی‌ترین مفاهیم بشری، عشق.`,
  },
  {
    id: 3,
    title: "منطق الطیر",
    author: "عطار",
    published_date: 1177,
    language: "persian",
    genre: "شعر",
    imgSrc: "3.jpg",
    about: `دوستداران ادبیات کهن پارسی حتما با منظومه منطق الطیر (The Conference of the Birds) آشنا هستند. اثری ماندگار از فریدالدین ابوحامد محمد عطار نیشابوری (Attar of Nishapur) که در قرن ششم هجری قمری سروده شده است که ابیات این مثنوی را معمولا بین چهارهزار و سیصد تا چهارهزار ششصد بیت تخمین زده‌اند.
    این منظومه که به نام مقامات الطیور نیز شهرت دارد، از برجسته‌ترین آثار در عرفان اسلامی محسوب می‌شود که هفت وادی عرفان یا همان هفت شهر عشق را در قالب داستانی تمثیلی شرح داده است. هفت مرحله‌ای که به ترتیب شامل: طلب، عشق، معرفت، استغنا، توحید، حیرت، فقر و فنا می‌شود.`
  },
  {
    id: 4,
    title: "مثنوی معنوی",
    author: "مولوی",
    published_date: 1258,
    language: "persian",
    genre: "شعر",
    imgSrc: "4.jpg",
    about: `مثنوی مولوی، همانند بیشتر مثنوی‌های صوفیانه، به صورت عمده‌ از «داستان» به عنوان ابزاری برای بیان تعلیمات تصوف استفاده می‌کند. ترتیب قرار گرفتن داستان‌های گوناگون در این کتاب ظاهرا نظم مشخصی ندارد. شخصیت‌های اصلی داستان‌ها می‌تواند از پیامبران و پادشاهان تا چوپانان و بردگان باشد. حیوانات نیز نقش پررنگی در این داستان‌ها بازی می‌کنند. آخرین داستان مثنوی (شاهزادگان و دژ هوش ربا)، با وفات مولوی ناتمام ماند. دفتر ششم مثنوی از همین روی دفتری ناتمام است. فرزند او مثنوی زیبایی دارد که در آن از مرگ پدر و ناتمام ماندن مثنوی گله کرده‌ است. اصل داستان را البته جویندگان می‌توانند در مقالات شمس تبریزی بیابند و از بخش پایانی قصه مطلع شوند.`
  },
  {
    id: 5,
    title: "دیوان حافظ",
    author: "حافظ",
    published_date: 1200,
    language: "persian",
    genre: "شعر",
    imgSrc: "5.jpg",
    about: `اشعارِ حافظ در چهار قالب مثنوی، قصیده، غزل و قطعه هستند. در شعر حافظ از ۲۳ وزن و ۱۰ بحر عروضی استفاده شده است.
    از عمده مشخصات شعر حافظ ، طنز موجود در اشعارشان است که آن را در همه بخش‌ها از جمله در زمینه خیالی به کار برده است و در زمینه‌های فکری گاهی به خیام هم فکر می‌کند. به طور کلی در دیوان حافظ می‌توان خلاصه‌‏ای از همه جریانات مهم و عهده ادبیات پیش از او را مشاده کرد. حافظ به شعر همه شاعران بزرگ مخصوصا به شاعران معاصر خود توجه بسیار داشت و بسیاری از غزلیات او از غزلیات آنان نشات گرفته است.`
  },
  {
    id: 6,
    title: "رومئو و جولیت",
    author: "ویلیام شکسپیر",
    published_date: 1595,
    language: "english",
    genre: "عاشقانه",
    imgSrc: "6.jpg",
    about: `دو خاندان، به‌ شان و جاه یکسان، در ورونای دلکش و صحنۀ این داستان، از کینه‌های دیرین تا تمردی نوین ره می‌پیمایند و شهر گانان، دست‌ها به خون یکدیگر می‌آلایند. میوهٔ جان نابختیار این دشمنان، دو عاشق ستاره سوخته‌اند که جان خویش می‌ستانند و با نگون‌بختی غمبار و دریغ‌انگیز و با مرگشان، خصومت والدان خود را به خاک می‌سپارند.
    رومئو و ژولیت (Romeo And Juliet) اگرچه داستان عشق دو جوان است، اما در عین حال به روایت رقابت میان خانواده‌های پا به‌سن گذاشته آن‌ها هم می‌پردازد. نکته عجیب این است که با وجود اینکه دشمنی میان دو خانواده کپیولت و مونتیگو یکی از عناصر کلیدی این نمایشنامه است، اما هیچ وقت درباره ریشه‌های این کینه قدیمی صحبتی به میان نمی‌آید اما دو عاشق هنجار شکن این نمایشنامه می‌خواهند قوانین سخت‌گیرانه اجتماعی را به نفع خودشان کنار بزنند. این عصیان‌گری جوانانه در ‌‌نهایت به فاجعه منجر می‌شود. اما شکسپیر توقع دارد ما خودمان مقصر این تراژدی را پیدا کنیم.`
  },
  {
    id: 8,
    title: "ویس و رامین",
    author: "فخرالدین اسعد گرگانی",
    published_date: 1054,
    language: "persian",
    genre: "عاشقانه",
    imgSrc: "7.jpg",
    about: ` از داستان‌های کهن فارسی مربوط به اواخر دورهٔ اشکانی است و پیش از آنکه فخرالدین اسعد گرگانی آن را به نظم درآورد، میان ایرانیان شهرت داشت. گرگانی در نوشتن این منظومه ابتدا آن را از پهلوی به فارسی دَری برگرداند و سپس به نظم کشید. سبک سرودن اشعار این مثنوی به دور از هرگونه پیچیدگی است. به همین سبب به داستانی لطیف و مؤثر در زبان و ادبیات فارسی تبدیل شده است.
    این کتاب داستان عشق دختری به نام ویس با برادر شاه موبد به‌نام رامین است.`
  },
  {
    id: 9,
    title: "گلستان",
    author: "سعدی",
    published_date: 1258,
    language: "persian",
    genre: "شعر",
    imgSrc: "8.jpg",
    about: `کتاب گلستان سعدی مجموعه حکایت‌های آموزنده و تأثیرگذار سعدی شیرازی، شاعر و نویسنده‌ی مشهور ایرانی در قالب نظم و نثری آهنگین است.
    سعدی این اثر گران‌بها را در قالب یک دیباچه و هشت باب به نظم و نثر مسجع و موزون نگاشته است و اکثر نوشته‌های آن کوتاه و به شیوه‌ی داستان‌ها و پندهای اخلاقی هستند. هنر داستان‌گویی و ایجاز وی مانع شده است که وجه تعلیمی آن باعث ملالت خواننده گردد.`
  },
  {
    id: 9,
    title: "بوستان",
    author: "سعدی",
    published_date: 1257,
    language: "persian",
    genre: "شعر",
    imgSrc: "9.jpg",
    about: `بوستان سعدی یا سعدی‌نامه نخستین اثر سعدی است که کار سرودن آن در سال ۶۵۵ هجری قمری پایان یافته‌است. سعدی این اثر را زمانی که در سفر بوده است، سروده و هنگام بازگشت به شیراز آن را به دوستانش عرضه کرده است. این اثر در قالب مثنوی و در بحر متقارب سروده شده‌ و از نظر قالب و وزن شعری حماسی است، هر چند که از نظر محتوا به اخلاق و تربیت و سیاست و اجتماعیات پرداخته‌است.`
  },
  {
    id: 10,
    title: "گلشن راز",
    author: "شیخ محمود شبستری",
    published_date: 1311,
    language: "persian",
    genre: "شعر",
    imgSrc: "10.jpg",
    about: `مثنوی گلشن راز مهم‌ترین و مشهورترین اثر منظوم محمود شبستری است که در بردارندهٔ اندیشه‌های عرفانی وی می‌باشد. با وجود حجم اندکش، این کتاب یکی از یادگارهای پرارزش و بلندنام ادبیات عرفانی کهن فارسی است، که در آن بیان مفاهیم صوفیانه با شور، شوق، و روانی ویژه‌ای همراه‌گردیده است. مطابق شیوهٔ معمول عطار و مولانا، در این‌جا نیز، از حکایات و تمثیلات برای بیان و عرضهٔ مؤثّر معانی عرفانی و حکمی استفاده شده است.
    شبستری این مثنوی را در پاسخ به پرسش‌های امیر حسینی هروی سروده است. در هفدهم ماه شوال سال ۷۱۷ فرستاده‌ای از خراسان مشکلات و مسائل مربوط به فهم و تبیین پاره‌ای از رموز و اشارات عرفانی را در قالب نامه‌ای منظوم در مجلسی با حضور شبستری می‌خواند.`
  },
  {
    id: 11,
    title: "لیلی و مجنون",
    author: "نظامی",
    published_date: 1188,
    language: "persian",
    genre: "عاشقانه",
    imgSrc: "11.jpg",
    about: `لیلی و مجنون منظومه‌ی مثنوی عاشقانه‌ی شاعر نام‌دار و بلندپایه‌ی ایرانی، نظامی گنجوی است. این منظومه برگرفته از داستانی با ریشه‌ای عربی است. برخی قدمت داستان را به پیش از اسلام نسبت داده و به تمدن بابل منتسب کرده‌اند. ریشه و قدمت هر چه باشد، این داستان در کلمات نظامی زنده و به شاهکاری جاودان تبدیل شد، چنان‌که هیلال، ادیب مصری در این‌باره می‌گوید: «تبدیل یک افسانه محلی به یک اثر بزرگ و گران‌بهای هنری تنها از عهده‌ی کسی مانند نظامی ساخته بود». نظامی البته خود آن‌چنان اشتیاقی به نظم درآوردن این داستان نداشت تا این‌که شاه شروان از او مطالبه کرد. نظامی روایت‌های پراکنده‌ای را که از این داستان وجود داشت، گرد آورد و با جادوی کلمات و شاعرنگی بی‌بدیلش، یکی از بزرگ‌ترین عاشقانه‌های پارسی را در ۴۷۰۰ بیت آفرید.`
  },
  {
    id: 12,
    title: "شاهنامه",
    author: "فردوسی",
    published_date: 1010,
    language: "persian",
    genre: "شعر",
    imgSrc: "12.jpg",
    about: `کتاب شاهنامه فردوسی اثر حکیم ابوالقاسم فردوسی، جزء بزرگ‌ترین حماسه‌های جهان، مهم‌ترین نامهٔ اندیشهٔ سیاسی ایران‌ شهری در دورهٔ اسلامی، شاهکار حماسی زبان فارسی و حماسهٔ ملی ایرانیان و نیز بزرگ‌ترین سند هویت ایشان است.
    شاهنامه به تنهایی از همهٔ مآثر ملی بیشتر و بهتر توانسته در زنده نگه داشتن نام و نشان ایرانی، دمیدن روح مردانگی و جوانمردی و شهامت در مردم این مرز و بوم مؤثر واقع گردد و یک پارچگی و استقلال کشور را تضمین نماید.
    کتاب شاهنامه فردوسی (Shahnameh)، اثری است منظوم در حدود پنجاه‌ هزار بیت در بحر متقارب مثمن محذوف. سرایش آن حدود سی‌سال به طول انجامید. `
  },
  {
    id: 13,
    title: "ایلیاد",
    author: "هومر",
    published_date: 762,
    language: "greek",
    genre: "شعر",
    imgSrc: "13.jpg",
    about: `کتاب "ایلیاد" به همراه «اودیسه» از آثار حماسی و فاخر یونان می باشد که از بسیاری لحاظ هم‌سان با شاهنامه‌ی فردوسی بوده و تاریخ باستان و اساطیر و خدایان و... یونان باستان را در قالب شعر بیان نموده است. البته این دو منظومه، نه به مانند شاهنامه که کمتر از 1000 سال قبل سروده شده، مربوط به 3000 سال پیش بوده و شاید بیش از هر اثر ادبی دیگر در سراسر جهان شهرت و اعتبار دارد.`
  },
  {
    id: 14,
    title: "اودیسه",
    author: "هومر",
    published_date: 725,
    language: "greek",
    genre: "شعر",
    imgSrc: "14.jpg",
    about: `«اودیسه» زمان صلح و بازگشت قهرمانان را از جنگ «تروا» نشان می دهد و سرگذشت یکی از سران جنگ، بنام «اودیسیوس» می‌باشد که در سفری طولانی، ماجراهای مختلف و خطیری برای وی و همراهانش پیش آمده و در نهایت که همگان گمان به کشته‌شدن وی می نمودند به وطن خود باز گشته و دست متجاوزان را از سرزمین و زن و فرزند خود کوتاه می‌نماید. در بسیاری از زبان‌ها «اودیسه»، سرگردانی و آوارگی معنا شده، ولی این منظومه درباره‌ی دریا و خشکی است و به قلمروی افسانه‌ها می‌پردازد، حتی جهان زیرزمین، سیکلوپ ها، سیرن ها، خاروبدیس و سکولا را معرفی می‌کند.`
  },
  {
    id: 15,
    title: "هملت",
    author: "ویلیام شکسپیر",
    published_date: 1609,
    language: "greek",
    genre: "درام",
    imgSrc: "15.jpg",
    about: `داستان هملت درباره‌ی شاهزاده‌ی دانمارکی است. هملت، شاهزاده‌ی دانمارکی و انسانی مهربان، متواضع، مبادی آداب، شجاع و دانشمند است. او را نمی‌توان فریب داد و از دروغ و ریا به‌شدت نفرت دارد. تنها عیب او تردید است. او می‌داند به او خیانت شده و باید انتقام بگیرد، اما تردید و دودلی روح او را عذاب می‌دهد.
    شخصیت هملت در طی داستان دچار تحول می‌شود. او که در ابتدای ماجرا فردی کمال‌جو است، پدرش را به عوان انسانی کامل و پادشاهی منصف می‌شناسد. مادرش «گرترود»، نمونه‌ی یک انسان شریف، فداکار و خانواده‌دوست است ولی رفته‌رفته ماجراهایی اتفاق می‌افتد که ابعادی دیگر از زندگی را به هملت نشان می‌دهد.`
  },
  {
    id: 16,
    title: "دن کیشوت",
    author: "میگل دسروانتس",
    published_date: 1605,
    language: "spanish",
    genre: "درام",
    imgSrc: "16.jpg",
    about: `دن کیشوت نجیب‌زاده‌ای است که در دورانی که شوالیه‌گری (عیاری و پهلوانی قرون وسطایی) دیگر رونقی ندارد می‌خواهد بساط پهلوانی علم کند. قصد او این است که به اوهام و تخیلات خود، که در نتیجه شب و روز خواندن داستان‌های پهلوانی در ذهن او خانه کرده است، صورت واقعیت بخشد. با آن‌که توان آن ندارد که مگسی را از خود براند، زره می‌پوشد و کلاه‌خود بر سر می‌گذارد و زوبین در دست و شمشیر بر کمر بر اسبی ناتوان‌تر از خود سوار می‌شود و در جستجوی حوادث و ماجراهای پهلوانی سر به دشت و بیابان می‌نهد. اما واقعیت‌های زندگی کجا و اوهام و پندارهای او کجا! دن کیشوت بی‌هدف نیست و افکار و آرمان‌های عالی دارد، ولی چون واقعیت‌ها با او سرِیاری ندارند و زندگی با اندیشه‌های او جور در نمی‌آید، به جنگ واقعیت می‌رود. نبرد تن به تن او با آسیاب‌های بادی زنده‌ترین نمونه درافتادن خودسرانه و کورکورانه او با مظاهر عینی و واقعی حیات است.`
  },
];



function like(id) {
  if (likedBooksId.includes(id)) {
    likedBooksId.splice(likedBooksId.indexOf(id), 1);
  } else
    likedBooksId.push(id);

  likedBooks = likedBooksId.map(item => {
    return item = BOOKS.find(book => book.id === item)
  })

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
}


function pagination(p, data) {

  if (data.length == 0) {
    root.innerHTML = `<p class="notFound">نتیجه ای یافت نشد!</p>`;
    document.querySelector(".pageHandler").innerHTML=""
  }
  else {
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


function getValue(){
  num = document.getElementById("number").value;
  if (showLikedBooks.outerHTML.includes("current")){
    pagination(1,likedBooks);
  }else
  pagination(1, BOOKS);
}



home.addEventListener("click", function () {
  pagination(page, BOOKS)
});

window.addEventListener("load", function () {
  pagination(page, BOOKS)
})

showLikedBooks.addEventListener("click", showLikedBooksFN);

searchInput.addEventListener("keyup", search);

document.querySelector("#number").addEventListener("change" , getValue);