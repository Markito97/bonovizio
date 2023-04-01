import { Navigation, Pagination } from "swiper";
import "./src/scss/index.scss";

import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
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
