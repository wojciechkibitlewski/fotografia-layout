const swiperSlide = document.querySelectorAll(".swiper-slide");
const swiperDot = document.querySelectorAll(".fa-circle");
const swiperAngelLeft = document.querySelector(".fa-angle-left");
const swiperAngelRight = document.querySelector(".fa-angle-right");
const swiperContainer = document.querySelector(".swiper-container");

const hiddenSlide = (e) => {
  swiperSlide.forEach((e) => {
    e.classList.remove("active");
  });
};

const hiddenDot = (e) => {
  swiperDot.forEach((e) => {
    e.classList.remove("light");
    e.classList.add("dark");
  });
};

let i = 0;

function increment() {
  if (i == swiperSlide.length) {
    i = 0;
  }
  hiddenSlide();
  hiddenDot();
  swiperSlide[i].classList.add("active");
  swiperDot[i].classList.add("light");

  i++;
}

swiperAngelLeft.addEventListener("click", (e) => {
  let swiperSlideActive = document.querySelector(".swiper-slide.active");
  let swiperDotActive = document.querySelector(".fa-circle.light");

  if (i == 0) {
    i = swiperSlide.length;
  }
  i--;

  hiddenSlide();
  hiddenDot();
  swiperSlide[i].classList.add("active");
  swiperDot[i].classList.add("light");
});

swiperAngelRight.addEventListener("click", (e) => {
  let swiperSlideActive = document.querySelector(".swiper-slide.active");
  let swiperDotActive = document.querySelector(".fa-circle.light");
  i++;
  if (i == swiperSlide.length) {
    i = 0;
  }

  hiddenSlide();
  hiddenDot();
  swiperSlide[i].classList.add("active");
  swiperDot[i].classList.add("light");
});

setInterval(increment, 4000);



