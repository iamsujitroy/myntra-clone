const inputSearch = document.querySelector(".search-bar input");
const inputSearchContainer = document.querySelector(".search-bar");

// search section starts here
inputSearch.addEventListener("focus", () => {
  inputSearchContainer.style.backgroundColor = "#fff";
  inputSearch.style.backgroundColor = "#fff";
  inputSearchContainer.style.border = "1px solid #f5f5f6";
});
inputSearch.addEventListener("focusout", () => {
  inputSearchContainer.style.backgroundColor = "#f5f5f6";
  inputSearch.style.backgroundColor = "#f5f5f6";
  inputSearchContainer.style.border = "none";
});
// search section ends here
const slides = document.querySelectorAll(".showSlides");
let i = -1;
setInterval(() => {
  if (i < slides.length) {
    slides.forEach((element) => {
      element.style.transform = `translate(-${i}00%)`;
      // activeImage(i);
    });
    i = ++i;
  } else {
    i = 0;
  }
  activeImage(i);
}, 2000);

// create dots based on the crousel length
const carouselControler = document.querySelector(".carousel-controler");
slides.forEach((element) => {
  let controlerSpan = document.createElement("span");
  carouselControler.appendChild(controlerSpan);
});
//TODO: this function will show active carousel imge via the controlerSpan
function activeImage(activeImageValue) {
  // console.log(activeImageValue);
}