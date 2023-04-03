import { Navigation, Pagination } from "swiper";
import anime from "animejs/lib/anime.es.js";
import Swiper from "swiper/bundle";
import "./src/scss/index.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

console.log(anime);

(function start() {
  const menu = document.querySelector(".nav");
  const burgerBtn = document.querySelector(".burger__menu");
  const messageForm = document.querySelector(".message__form");

  const sendForm = (e) => {
    e.preventDefault();
  };

  messageForm.addEventListener("submit", sendForm);

  let isOpen = false;

  const handleMenu = () => {
    burgerBtn.classList.toggle("active");
    menu.classList.toggle("open");
    isOpen = !isOpen;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  burgerBtn.addEventListener("click", handleMenu);

  const desktopSwiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
    pagination: {
      el: ".swiper-custom-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-unique",
      prevEl: ".swiper-button-prev-unique",
    },
    modules: [Navigation, Pagination],
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.classList.remove("open");
      burgerBtn.classList.remove("active");
    }
  });
})();
