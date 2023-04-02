import { Navigation, Pagination } from "swiper";
import "./src/scss/index.scss";
import Swiper from "swiper/bundle";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const menu = document.querySelector(".nav");
const burgerBtn = document.querySelector(".burger__menu");

burgerBtn.addEventListener("click", (e) => {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.classList.remove("open");
    burgerBtn.classList.remove("active");
  }
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  pagination: {
    el: ".swiper-custom-pagination",
    paginationDistance: "30px",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 20,
  modules: [Navigation, Pagination],
});
