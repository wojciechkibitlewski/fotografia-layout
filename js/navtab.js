const tabLink = document.querySelectorAll(".tab-link");
const tabBody = document.querySelectorAll(".tab-body");

//

const hiddenTab = (e) => {
  tabBody.forEach((e) => {
    e.classList.add("hidden");
  });
};
const hiddenLink = (e) => {
    tabLink.forEach((e) => {
    e.classList.remove("active");
  });
};

tabLink.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    hiddenTab();
    hiddenLink();
    let pl = e.target.dataset.tabs;
    let a = document.getElementById(pl);
    a.classList.remove("hidden");
    el.classList.add("active");
  });
});