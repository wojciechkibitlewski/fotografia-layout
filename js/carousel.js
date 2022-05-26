const swiperSlide = document.querySelectorAll(".swiper-slide");
const swiperDot = document.querySelectorAll(".fa-circle");
const swiperAngelLeft = document.querySelector(".fa-angle-left");
const swiperAngelRight = document.querySelector(".fa-angle-right");


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

swiperAngelLeft.addEventListener("click", (e) => {
    console.log("w lewo");
});
swiperAngelRight.addEventListener("click", (e) => {
    let swiperSlideActive = document.querySelector(".swiper-slide.active");
    let swiperDotActive = document.querySelector(".fa-circle.light");
    
    hiddenSlide();
    swiperSlideActive.nextElementSibling.classList.add("active");
    hiddenDot();
    swiperDotActive.nextElementSibling.classList.add("light");
    console.log("w prawo",swiperSlideActive);
});


let i = 0 

function increment() {
    
    if (i == swiperSlide.length) { i = 0};
    hiddenSlide();
    hiddenDot();
    swiperSlide[i].classList.add("active");
    swiperDot[i].classList.add("light");
    //console.log(swiperSlide[i]);
    //console.log(swiperDot[i]);
    //console.log(i)
    i++;
}

setInterval(increment, 5000)